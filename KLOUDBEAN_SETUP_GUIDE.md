# KloudBean WordPress Integration Setup Guide

## Overview
This guide is specifically for setting up WordPress integration on KloudBean hosting platform.

## Prerequisites
- KloudBean account with WordPress installed
- Access to KloudBean dashboard
- WordPress admin access

---

## Step 1: Access Your WordPress Files

### Option A: Via KloudBean File Manager
1. Log in to your KloudBean dashboard
2. Navigate to your WordPress application
3. Click on **"File Manager"** or **"Files"** tab
4. Navigate to your WordPress root directory (usually `/public_html` or `/htdocs`)

### Option B: Via SFTP (if available)
1. Get SFTP credentials from KloudBean dashboard
2. Use FileZilla or similar SFTP client
3. Connect to your server
4. Navigate to WordPress root directory

---

## Step 2: Upload PHP Files

### Method 1: Create Plugin (Recommended)

1. **Create plugin directory:**
   - In File Manager, navigate to: `/wp-content/plugins/`
   - Create a new folder named: `remax-integration`

2. **Upload PHP files:**
   - Upload these 3 files to `/wp-content/plugins/remax-integration/`:
     - `remax-custom-post-types.php`
     - `remax-rest-api.php`
     - `remax-webhooks.php`

3. **Create main plugin file:**
   - In `/wp-content/plugins/remax-integration/` folder
   - Create new file: `remax-integration.php`
   - Add this code:

```php
<?php
/**
 * Plugin Name: REMAX Integration
 * Description: Headless CMS integration for REMAX Excellence Next.js website
 * Version: 1.0.0
 * Author: REMAX Excellence
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Load plugin files
require_once plugin_dir_path(__FILE__) . 'remax-custom-post-types.php';
require_once plugin_dir_path(__FILE__) . 'remax-rest-api.php';
require_once plugin_dir_path(__FILE__) . 'remax-webhooks.php';
```

4. **Activate plugin:**
   - Go to WordPress Admin → Plugins
   - Find "REMAX Integration"
   - Click "Activate"

### Method 2: Add to Theme (Alternative)

1. **Access theme files:**
   - In File Manager, navigate to: `/wp-content/themes/your-active-theme/`
   - Open `functions.php` file

2. **Add PHP code:**
   - Copy contents of `remax-custom-post-types.php`
   - Paste at the end of `functions.php`
   - Repeat for `remax-rest-api.php` and `remax-webhooks.php`
   - Save file

---

## Step 3: Configure Webhook URL

1. **Access wp-config.php:**
   - In File Manager, navigate to WordPress root directory
   - Find `wp-config.php` file
   - Right-click → Edit (or download, edit, re-upload)

2. **Add webhook configuration:**
   - Find the line: `/* That's all, stop editing! Happy publishing. */`
   - Add this line **BEFORE** that comment:

```php
// REMAX Integration Webhook URL
define('REMAX_WEBHOOK_URL', 'https://your-nextjs-site.com/api/webhooks/wordpress');
```

   - Replace `https://your-nextjs-site.com` with your actual Next.js deployment URL
   - For local testing: `http://localhost:3000/api/webhooks/wordpress`
   - Save file

---

## Step 4: Verify Installation

### Test 1: Check Custom Post Types
1. Go to WordPress Admin
2. You should see new menu items:
   - **Agents**
   - **Team Members**
   - **Testimonials**
   - **Page Sections**

### Test 2: Check REST API
1. Open browser
2. Visit: `https://your-wordpress-site.com/wp-json/wp/v2/agents`
3. Should return JSON (empty array `[]` if no agents yet)

### Test 3: Check Custom Endpoints
1. Visit: `https://your-wordpress-site.com/wp-json/remax/v1/hero`
2. Should return JSON with hero section data

---

## Step 5: Configure Next.js

1. **Create `.env.local` file** in your Next.js project:

```env
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
WORDPRESS_WEBHOOK_SECRET=your-secret-key-here
```

2. **Replace values:**
   - `https://your-wordpress-site.com` = Your KloudBean WordPress URL
   - `your-secret-key-here` = Random string for security (optional)

3. **Restart Next.js dev server:**
   ```bash
   npm run dev
   ```

---

## Step 6: Add Content in WordPress

### Add Agents (Carousel)
1. WordPress Admin → **Agents** → Add New
2. **Title:** Enter agent name
3. **Featured Image:** Upload agent photo
4. **Agent Information** meta box:
   - Agent Name: (same as title or different)
   - Display Order: 0, 1, 2, etc.
5. Click **Publish**

### Add Team Members
1. WordPress Admin → **Team Members** → Add New
2. **Title:** Enter team member name
3. **Featured Image:** Upload photo
4. **Team Member Information** meta box:
   - Role: e.g., "Broker/Owner"
   - Phone: (optional)
   - Email: Required
   - Instagram URL: (optional)
   - LinkedIn URL: (optional)
   - Display Order: 0, 1, 2, etc.
5. Click **Publish**

### Add Testimonials
1. WordPress Admin → **Testimonials** → Add New
2. **Title:** Client name
3. **Content:** Testimonial text (main editor)
4. **Testimonial Information** meta box:
   - Role/Title: e.g., "First-time Homebuyers"
   - Rating: 1-5
   - Display Order: 0, 1, 2, etc.
5. Click **Publish**

### Configure Hero Section
1. WordPress Admin → **Settings** → **REMAX Hero**
2. Fill in all fields:
   - Title: "REMAX"
   - Subtitle: "EXCELLENCE"
   - Description: "One of the Youngest, Fastest-Growing Real Estate Brokerage"
   - Stats Text: "120+ Motivated Agents"
   - Stats Subtext: "Growing daily"
   - Background Image URL: (upload image, copy URL)
   - CTA Button Text: "Join Our Team"
3. Click **Save Settings**

---

## Troubleshooting

### Issue: Can't see custom post types
**Solution:**
- Check if plugin is activated
- Clear WordPress cache (if using caching plugin)
- Check KloudBean error logs

### Issue: REST API returns 404
**Solution:**
- Verify PHP files are uploaded correctly
- Check file permissions (should be 644)
- Verify `show_in_rest => true` in post type registration

### Issue: Can't edit wp-config.php
**Solution:**
- Download file, edit locally, re-upload
- Or use KloudBean's code editor if available
- Check file permissions

### Issue: Webhooks not working
**Solution:**
- Verify `REMAX_WEBHOOK_URL` in wp-config.php
- Check Next.js webhook endpoint is accessible
- Check KloudBean firewall settings (may block webhooks)

### Issue: CORS errors
**Solution:**
- KloudBean may have CORS restrictions
- Check `remax-rest-api.php` CORS settings
- Contact KloudBean support if needed

---

## KloudBean-Specific Tips

1. **File Permissions:**
   - PHP files: 644
   - Directories: 755

2. **Caching:**
   - If using KloudBean caching, clear cache after changes
   - May need to disable caching for REST API endpoints

3. **PHP Version:**
   - Ensure PHP 7.4+ (check in KloudBean dashboard)
   - WordPress requires PHP 7.4 minimum

4. **SSL/HTTPS:**
   - Ensure WordPress URL uses HTTPS
   - Update `.env.local` with HTTPS URL

---

## Next Steps

1. ✅ Upload PHP files to KloudBean
2. ✅ Configure webhook URL
3. ✅ Activate plugin
4. ✅ Test REST API endpoints
5. ✅ Configure Next.js environment
6. ✅ Add content in WordPress
7. ✅ Test full integration

---

## Support

If you encounter issues:
1. Check KloudBean error logs
2. Check WordPress debug logs (enable WP_DEBUG)
3. Test REST API endpoints directly
4. Verify file permissions
5. Contact KloudBean support if server-side issues

---

## Quick Checklist

- [ ] PHP files uploaded to KloudBean
- [ ] Plugin activated (or code added to theme)
- [ ] Webhook URL configured in wp-config.php
- [ ] REST API endpoints accessible
- [ ] Next.js .env.local configured
- [ ] Content added in WordPress
- [ ] Integration tested and working

