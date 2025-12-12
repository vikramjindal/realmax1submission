/**
 * WordPress Webhook Handler
 * 
 * This endpoint receives webhooks from WordPress when content is updated
 * It can trigger Next.js rebuilds or ISR revalidation
 */

import type { NextApiRequest, NextApiResponse } from 'next';

// Verify webhook secret (optional but recommended)
const WEBHOOK_SECRET = process.env.WORDPRESS_WEBHOOK_SECRET || '';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Verify webhook secret if set
  if (WEBHOOK_SECRET) {
    const providedSecret = req.headers['x-webhook-secret'];
    if (providedSecret !== WEBHOOK_SECRET) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }

  try {
    const payload = req.body;

    // Log webhook for debugging
    console.log('WordPress webhook received:', payload);

    // Verify it's from WordPress
    const isWordPressWebhook = req.headers['x-wordpress-webhook'] === 'true';
    if (!isWordPressWebhook) {
      console.warn('Webhook not from WordPress');
    }

    const { action, post_type, post_id, timestamp } = payload;

    // Handle different actions
    switch (action) {
      case 'created':
      case 'updated':
        console.log(`Content ${action}: ${post_type} #${post_id}`);
        
        // Trigger ISR revalidation for specific pages
        await revalidatePages(post_type, post_id);
        break;

      case 'deleted':
        console.log(`Content deleted: ${post_type} #${post_id}`);
        await revalidatePages(post_type, post_id);
        break;

      case 'option_updated':
        console.log(`Option updated: ${payload.option_name}`);
        // Revalidate homepage when hero options change
        await revalidatePath('/');
        break;

      default:
        console.log('Unknown action:', action);
    }

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Webhook processed',
      action,
      post_type,
      post_id,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error processing webhook',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}

// Revalidate specific pages based on post type
async function revalidatePages(postType: string, postId: number) {
  const pathsToRevalidate: string[] = [];

  switch (postType) {
    case 'remax_agent':
    case 'remax_team':
    case 'remax_testimonial':
    case 'remax_section':
      // Revalidate homepage
      pathsToRevalidate.push('/');
      break;

    case 'remax_marketing':
      // Revalidate marketing page
      pathsToRevalidate.push('/marketing');
      break;

    case 'remax_event':
    case 'remax_past_event':
      // Revalidate events page
      pathsToRevalidate.push('/events');
      break;

    case 'remax_training':
      // Revalidate training page
      pathsToRevalidate.push('/training');
      break;

    case 'post':
      // Revalidate blog listing and individual post
      pathsToRevalidate.push('/blog');
      try {
        // Try to get post slug to revalidate individual post
        const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL;
        if (wordpressUrl) {
          const response = await fetch(
            `${wordpressUrl}/wp-json/wp/v2/posts/${postId}`
          );
          if (response.ok) {
            const post = await response.json();
            pathsToRevalidate.push(`/blog/${post.slug}`);
          }
        }
      } catch (error) {
        console.error('Error fetching post for revalidation:', error);
      }
      break;
  }

  // Revalidate each path
  for (const path of pathsToRevalidate) {
    await revalidatePath(path);
  }
}

// Revalidate a specific path using Next.js ISR
async function revalidatePath(path: string) {
  try {
    // If using Vercel, use their revalidation API
    if (process.env.VERCEL) {
      const revalidateUrl = process.env.VERCEL_REVALIDATE_URL;
      const revalidateSecret = process.env.VERCEL_REVALIDATE_SECRET;

      if (revalidateUrl && revalidateSecret) {
        await fetch(`${revalidateUrl}?path=${path}&secret=${revalidateSecret}`, {
          method: 'POST',
        });
        console.log(`Revalidated path: ${path}`);
        return;
      }
    }

    // For other hosting, you might need to trigger a rebuild
    // or use a different revalidation method
    console.log(`Would revalidate path: ${path} (not on Vercel)`);
  } catch (error) {
    console.error(`Error revalidating path ${path}:`, error);
  }
}

