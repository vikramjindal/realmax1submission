# WordPress Integration Setup Guide

This directory contains PHP files to integrate WordPress as a headless CMS for the REMAX Excellence Next.js website.

## Installation

### Step 1: Upload PHP Files to WordPress

1. Copy all PHP files from this directory to your WordPress installation
2. You have two options:

   **Option A: Add to Theme's functions.php**
   - Open your active theme's `functions.php` file
   - Copy and paste the contents of each PHP file into `functions.php`
   - Save the file

   **Option B: Create a Custom Plugin (Recommended)**
   - Create a new folder in `/wp-content/plugins/` called `remax-integration`
   - Copy all PHP files into this folder
   - Create a new file `remax-integration.php` with this header:
   ```php
   <?php
   /**
    * Plugin Name: REMAX Integration
    * Description: Custom post types and REST API for REMAX Excellence website
    * Version: 1.0.0
    */
   
   require_once plugin_dir_path(__FILE__) . 'remax-custom-post-types.php';
   require_once plugin_dir_path(__FILE__) . 'remax-rest-api.php';
   require_once plugin_dir_path(__FILE__) . 'remax-webhooks.php';
   ```
   - Activate the plugin in WordPress admin

### Step 2: Configure Webhook URL

Add this line to your WordPress `wp-config.php` file:

```php
define('REMAX_WEBHOOK_URL', 'https://your-nextjs-site.com/api/webhooks/wordpress');
```

Replace `https://your-nextjs-site.com` with your actual Next.js deployment URL.

### Step 3: Configure CORS (if needed)

If your WordPress and Next.js are on different domains, you may need to configure CORS. The `remax-rest-api.php` file includes basic CORS support, but you might need to adjust it based on your hosting setup.

## Custom Post Types Created

1. **Agents** (`remax_agent`)
   - For homepage carousel images
   - Fields: Name, Image, Display Order

2. **Team Members** (`remax_team`)
   - For team section
   - Fields: Name, Role, Image, Phone, Email, Instagram, LinkedIn, Display Order

3. **Testimonials** (`remax_testimonial`)
   - For testimonials section
   - Fields: Name, Role, Content, Rating (1-5), Display Order

4. **Page Sections** (`remax_section`)
   - For homepage sections
   - Fields: Title, Content, Type, Subtitle, Image, Display Order

## REST API Endpoints

All custom post types are available via WordPress REST API:

- `/wp-json/wp/v2/agents` - Get all agents
- `/wp-json/wp/v2/team-members` - Get all team members
- `/wp-json/wp/v2/testimonials` - Get all testimonials
- `/wp-json/wp/v2/sections` - Get all sections
- `/wp-json/wp/v2/posts` - Get blog posts (native WordPress)
- `/wp-json/remax/v1/hero` - Get hero section settings
- `/wp-json/remax/v1/homepage-sections` - Get homepage sections

## Hero Section Settings

1. Go to WordPress Admin → Settings → REMAX Hero
2. Configure hero section text and images
3. Changes will trigger webhook to Next.js

## Webhooks

When content is created, updated, or deleted in WordPress, a webhook is automatically sent to your Next.js site to trigger ISR revalidation.

Webhook payload structure:
```json
{
  "action": "created|updated|deleted|option_updated",
  "post_type": "remax_agent|remax_team|remax_testimonial|remax_section|post",
  "post_id": 123,
  "timestamp": "2024-01-01 12:00:00",
  "site_url": "https://your-wordpress-site.com"
}
```

## Testing

1. **Test REST API:**
   - Visit: `https://your-wordpress-site.com/wp-json/wp/v2/agents`
   - You should see JSON data

2. **Test Webhook:**
   - Create/edit an agent in WordPress
   - Check Next.js logs for webhook receipt
   - Verify page revalidates

3. **Test Custom Endpoints:**
   - Visit: `https://your-wordpress-site.com/wp-json/remax/v1/hero`
   - Should return hero section data

## Troubleshooting

### REST API not showing custom fields
- Make sure `show_in_rest => true` is set in post type registration
- Clear WordPress cache if using caching plugins
- Check that `remax-rest-api.php` is loaded

### Webhooks not sending
- Verify `REMAX_WEBHOOK_URL` is set in `wp-config.php`
- Check WordPress error logs
- Ensure webhook URL is accessible from WordPress server

### CORS errors
- Update CORS headers in `remax-rest-api.php`
- Check if your hosting provider has CORS restrictions
- Consider using a proxy in Next.js API routes

## Next Steps

1. Add content in WordPress admin
2. Configure Next.js environment variables
3. Test the integration
4. Deploy both WordPress and Next.js

