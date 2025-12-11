# WordPress Integration - Quick Setup Guide

## 🎯 What's Been Implemented

Your Next.js website is now integrated with WordPress as a headless CMS. Here's what you can edit from WordPress:

1. **Hero Section** - Title, subtitle, description, stats, background image
2. **Agent Carousel** - Images and names that rotate on homepage
3. **Team Members** - Full team section with images, roles, contact info
4. **Testimonials** - Client testimonials with ratings
5. **Blog Posts** - All blog content (in progress)

## 📦 Files Created

### WordPress PHP Files (Upload to WordPress)
- `wordpress-integration/remax-custom-post-types.php`
- `wordpress-integration/remax-rest-api.php`
- `wordpress-integration/remax-webhooks.php`

### Next.js Files
- `src/lib/wordpress.ts` - API utilities
- `src/pages/api/webhooks/wordpress.ts` - Webhook handler

## 🚀 Setup Steps

### 1. WordPress Setup

**Option A: Add to Theme (Quick)**
1. WordPress Admin → Appearance → Theme Editor
2. Open `functions.php`
3. Copy contents of all 3 PHP files
4. Paste at end of `functions.php`
5. Save

**Option B: Create Plugin (Recommended)**
1. Create folder: `/wp-content/plugins/remax-integration/`
2. Copy all 3 PHP files into folder
3. Create `remax-integration.php`:
```php
<?php
/**
 * Plugin Name: REMAX Integration
 * Version: 1.0.0
 */
require_once plugin_dir_path(__FILE__) . 'remax-custom-post-types.php';
require_once plugin_dir_path(__FILE__) . 'remax-rest-api.php';
require_once plugin_dir_path(__FILE__) . 'remax-webhooks.php';
```
4. Activate plugin

### 2. Configure Webhook

Edit `wp-config.php` (WordPress root):
```php
define('REMAX_WEBHOOK_URL', 'https://your-nextjs-site.com/api/webhooks/wordpress');
```

### 3. Next.js Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
WORDPRESS_WEBHOOK_SECRET=your-secret-key-here
```

### 4. Test Connection

Visit: `https://your-wordpress-site.com/wp-json/wp/v2/agents`

Should return JSON (empty array if no agents yet).

## 📝 Adding Content in WordPress

### Add Agents (Carousel)
1. WordPress Admin → Agents → Add New
2. Title: Agent name
3. Set Featured Image
4. Meta box: Enter name, set order
5. Publish

### Add Team Members
1. WordPress Admin → Team Members → Add New
2. Title: Name
3. Set Featured Image
4. Meta box: Fill role, email, phone, social links, order
5. Publish

### Add Testimonials
1. WordPress Admin → Testimonials → Add New
2. Title: Client name
3. Content: Testimonial text
4. Meta box: Role, rating (1-5), order
5. Publish

### Configure Hero Section
1. WordPress Admin → Settings → REMAX Hero
2. Fill all fields
3. Save

## ✅ Testing

1. Add content in WordPress
2. Visit Next.js site - should show WordPress content
3. Edit content in WordPress
4. Webhook should trigger (check Next.js logs)
5. Refresh Next.js site - should show updated content

## 🔧 Troubleshooting

**REST API not working?**
- Check PHP files are loaded
- Verify `show_in_rest => true` in post types
- Clear WordPress cache

**Webhooks not sending?**
- Verify `REMAX_WEBHOOK_URL` in wp-config.php
- Check WordPress error logs
- Ensure webhook URL is accessible

**Content not showing?**
- Check `NEXT_PUBLIC_WORDPRESS_URL` in .env.local
- Verify WordPress REST API is accessible
- Check browser console for errors

## 📚 Full Documentation

See `WORDPRESS_SETUP.md` for detailed instructions.

