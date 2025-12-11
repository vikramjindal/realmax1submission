# WordPress Integration - Complete Setup Guide

## Overview

This guide explains how to set up WordPress as a headless CMS for your REMAX Excellence Next.js website.

## Architecture

```
WordPress (Backend/CMS)
    ↓ (REST API)
Next.js (Frontend)
    ↓ (Webhooks)
Automatic Revalidation
```

## Step-by-Step Setup

### 1. WordPress Setup

#### A. Install PHP Files

**Option 1: Add to Theme (Quick)**
1. Go to WordPress Admin → Appearance → Theme Editor
2. Select your active theme's `functions.php`
3. Copy contents from `wordpress-integration/remax-custom-post-types.php`
4. Paste at the end of `functions.php`
5. Repeat for `remax-rest-api.php` and `remax-webhooks.php`
6. Save

**Option 2: Create Plugin (Recommended)**
1. Create folder: `/wp-content/plugins/remax-integration/`
2. Copy all PHP files into this folder
3. Create `remax-integration.php`:
```php
<?php
/**
 * Plugin Name: REMAX Integration
 * Description: Headless CMS integration for REMAX Excellence
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) exit;

require_once plugin_dir_path(__FILE__) . 'remax-custom-post-types.php';
require_once plugin_dir_path(__FILE__) . 'remax-rest-api.php';
require_once plugin_dir_path(__FILE__) . 'remax-webhooks.php';
```
4. Activate plugin in WordPress Admin → Plugins

#### B. Configure Webhook URL

Edit `wp-config.php` (in WordPress root):
```php
// Add before "That's all, stop editing!"
define('REMAX_WEBHOOK_URL', 'https://your-nextjs-site.com/api/webhooks/wordpress');
```

#### C. Test REST API

Visit: `https://your-wordpress-site.com/wp-json/wp/v2/agents`

Should return JSON (might be empty array if no agents yet).

### 2. Next.js Setup

#### A. Environment Variables

Create `.env.local` file:
```env
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
WORDPRESS_WEBHOOK_SECRET=your-secret-key-here
```

#### B. Test WordPress Connection

Run your Next.js dev server and check console for any WordPress connection errors.

### 3. Adding Content in WordPress

#### A. Add Agents (Carousel)

1. WordPress Admin → Agents → Add New
2. Enter agent name in title
3. Set featured image (upload image)
4. In "Agent Information" meta box:
   - Enter agent name
   - Set display order (0, 1, 2, etc.)
5. Publish

#### B. Add Team Members

1. WordPress Admin → Team Members → Add New
2. Enter name in title
3. Set featured image
4. In "Team Member Information" meta box:
   - Role (e.g., "Broker/Owner")
   - Phone (optional)
   - Email
   - Instagram URL (optional)
   - LinkedIn URL (optional)
   - Display order
5. Publish

#### C. Add Testimonials

1. WordPress Admin → Testimonials → Add New
2. Enter client name in title
3. Enter testimonial content in main editor
4. In "Testimonial Information" meta box:
   - Role/Title (e.g., "First-time Homebuyers")
   - Rating (1-5)
   - Display order
5. Publish

#### D. Configure Hero Section

1. WordPress Admin → Settings → REMAX Hero
2. Fill in all fields:
   - Title: "REMAX"
   - Subtitle: "EXCELLENCE"
   - Description: "One of the Youngest, Fastest-Growing Real Estate Brokerage"
   - Stats Text: "120+ Motivated Agents"
   - Stats Subtext: "Growing daily"
   - Background Image URL: (upload image, copy URL)
   - CTA Button Text: "Join Our Team"
3. Save Settings

#### E. Add Blog Posts

1. WordPress Admin → Posts → Add New
2. Write your blog post
3. Set featured image
4. Add categories/tags if needed
5. Publish

### 4. Testing the Integration

#### Test 1: REST API
```bash
curl https://your-wordpress-site.com/wp-json/wp/v2/agents
```

#### Test 2: Next.js Fetch
Visit: `http://localhost:3000` (should load data from WordPress)

#### Test 3: Webhook
1. Edit an agent in WordPress
2. Save
3. Check Next.js console/logs for webhook receipt
4. Refresh homepage - should show updated content

### 5. Deployment

#### WordPress
- Ensure PHP files are active
- Verify `REMAX_WEBHOOK_URL` points to production Next.js URL
- Test REST API endpoints

#### Next.js
- Set `NEXT_PUBLIC_WORDPRESS_URL` to production WordPress URL
- Deploy
- Test homepage loads WordPress data

## API Endpoints Reference

### WordPress REST API

**Agents:**
```
GET /wp-json/wp/v2/agents?_embed
```

**Team Members:**
```
GET /wp-json/wp/v2/team-members?_embed
```

**Testimonials:**
```
GET /wp-json/wp/v2/testimonials?_embed
```

**Blog Posts:**
```
GET /wp-json/wp/v2/posts?_embed&per_page=10
GET /wp-json/wp/v2/posts/{id}?_embed
```

**Hero Section:**
```
GET /wp-json/remax/v1/hero
```

**Homepage Sections:**
```
GET /wp-json/remax/v1/homepage-sections
```

### Next.js Webhook

**Webhook Endpoint:**
```
POST /api/webhooks/wordpress
```

Headers:
- `Content-Type: application/json`
- `X-WordPress-Webhook: true`
- `X-Webhook-Secret: {your-secret}` (if configured)

## Troubleshooting

### Issue: REST API returns 404
**Solution:** 
- Verify custom post types are registered
- Check `show_in_rest => true` is set
- Clear WordPress cache

### Issue: Custom fields not in API response
**Solution:**
- Ensure `remax-rest-api.php` is loaded
- Check `register_rest_field` functions are called
- Try adding `?_embed` to URL

### Issue: Webhooks not working
**Solution:**
- Verify `REMAX_WEBHOOK_URL` in `wp-config.php`
- Check webhook URL is accessible
- Check WordPress error logs
- Verify Next.js webhook endpoint exists

### Issue: CORS errors
**Solution:**
- Update CORS headers in `remax-rest-api.php`
- Use Next.js API routes as proxy if needed
- Check hosting provider CORS settings

### Issue: Images not loading
**Solution:**
- Verify image URLs in WordPress media library
- Check Next.js `next.config.mjs` remote patterns
- Ensure images are publicly accessible

## Support

If you encounter issues:
1. Check WordPress error logs
2. Check Next.js console/terminal
3. Verify all PHP files are loaded
4. Test REST API endpoints directly
5. Check environment variables

## Next Steps

1. ✅ WordPress PHP files installed
2. ✅ Next.js integration files created
3. ⏳ Add content in WordPress
4. ⏳ Test integration
5. ⏳ Deploy to production

