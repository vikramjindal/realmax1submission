# ✅ WordPress Integration Setup - Complete Guide

## Your Configuration

- **WordPress Backend:** https://backend.joinremaxex.com
- **Next.js Frontend:** https://joinremaxex.com
- **SFTP Host:** 172.105.20.212
- **SFTP User:** sftp_ssismgtomvoj
- **WordPress Admin:** marketing@remaxex.com

---

## ✅ What's Been Done

1. ✅ Created `.env.local` with WordPress URL
2. ✅ Created SFTP setup guide
3. ✅ Created connection test script
4. ✅ All PHP files ready in `wordpress-integration/` folder
5. ✅ Next.js code updated to fetch from WordPress

---

## 🚀 Next Steps (Do These Now)

### Step 1: Upload PHP Files via SFTP

**Using FileZilla:**
1. Download FileZilla: https://filezilla-project.org/
2. Connect:
   - Host: `sftp://172.105.20.212`
   - Username: `sftp_ssismgtomvoj`
   - Password: `1TuV6ox2sSRr7484`
   - Port: `22`

3. Navigate to WordPress:
   - Go to: `/wp-content/plugins/`
   - Create folder: `remax-integration`

4. Upload these 3 files (from `wordpress-integration/` folder):
   - `remax-custom-post-types.php`
   - `remax-rest-api.php`
   - `remax-webhooks.php`

5. Create `remax-integration.php` in same folder:
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

### Step 2: Edit wp-config.php

1. Via SFTP, download `wp-config.php` from WordPress root
2. Open in text editor
3. Find: `/* That's all, stop editing! Happy publishing. */`
4. Add BEFORE that line:
```php
// REMAX Integration Webhook URL
define('REMAX_WEBHOOK_URL', 'https://joinremaxex.com/api/webhooks/wordpress');
```
5. Save and upload back

### Step 3: Activate Plugin

1. Go to: https://backend.joinremaxex.com/wp-admin
2. Login: marketing@remaxex.com / GyER6gv47rw056bAc5
3. Go to: **Plugins** → **Installed Plugins**
4. Find: **REMAX Integration**
5. Click: **Activate**

### Step 4: Test Connection

Open browser and test these URLs:

1. **REST API Base:**
   ```
   https://backend.joinremaxex.com/wp-json/
   ```
   Should show WordPress info

2. **Agents Endpoint:**
   ```
   https://backend.joinremaxex.com/wp-json/wp/v2/agents
   ```
   Should return `[]` (empty array is OK)

3. **Hero Endpoint:**
   ```
   https://backend.joinremaxex.com/wp-json/remax/v1/hero
   ```
   Should return JSON

### Step 5: Restart Next.js

1. Stop current dev server (Ctrl+C)
2. Restart:
   ```bash
   npm run dev
   ```

3. Visit: http://localhost:3000
4. Should now fetch from WordPress!

### Step 6: Add Content

1. **WordPress Admin** → **Agents** → Add New
2. Upload image, enter name, set order
3. Publish
4. Refresh Next.js site → Should show WordPress content!

---

## 📋 Quick Checklist

- [ ] Connected to SFTP
- [ ] Created `/wp-content/plugins/remax-integration/` folder
- [ ] Uploaded 3 PHP files
- [ ] Created `remax-integration.php`
- [ ] Edited `wp-config.php` with webhook URL
- [ ] Activated plugin in WordPress
- [ ] Tested REST API endpoints
- [ ] Restarted Next.js server
- [ ] Added test content
- [ ] Verified content shows on site

---

## 🔧 Troubleshooting

### Can't connect via SFTP
- Verify IP: 172.105.20.212
- Check port 22
- Try different SFTP client

### Plugin not showing
- Check files uploaded correctly
- Verify file permissions (644)
- Clear WordPress cache

### REST API 404
- Verify plugin activated
- Check PHP files are correct
- Test endpoint in browser

### Next.js not fetching
- Check `.env.local` has correct URL
- Restart dev server
- Check browser console for errors

---

## 📞 Need Help?

1. Test connection: `node test-wordpress-connection-kloudbean.js`
2. Check SFTP guide: `KLOUDBEAN_SFTP_SETUP.md`
3. Verify endpoints in browser
4. Check WordPress error logs

---

## 🎉 Once Complete

Your site will:
- ✅ Fetch hero section from WordPress
- ✅ Show agents from WordPress carousel
- ✅ Display team members from WordPress
- ✅ Show testimonials from WordPress
- ✅ Update automatically when content changes

**All content editable from WordPress admin!**

