# KloudBean SFTP Setup Instructions

## Your Configuration

- **WordPress URL:** https://backend.joinremaxex.com
- **Frontend URL:** https://joinremaxex.com
- **SFTP Host:** 172.105.20.212
- **SFTP Username:** sftp_ssismgtomvoj
- **SFTP Password:** 1TuV6ox2sSRr7484

---

## Step 1: Connect via SFTP

### Using FileZilla (Recommended)

1. **Download FileZilla:** https://filezilla-project.org/
2. **Open FileZilla**
3. **Enter connection details:**
   - **Host:** `sftp://172.105.20.212` (note the `sftp://` prefix)
   - **Username:** `sftp_ssismgtomvoj`
   - **Password:** `1TuV6ox2sSRr7484`
   - **Port:** `22` (default for SFTP)
4. **Click "Quickconnect"**

### Using VS Code SFTP Extension

1. Install "SFTP" extension in VS Code
2. Create `.vscode/sftp.json`:
```json
{
    "name": "KloudBean WordPress",
    "host": "172.105.20.212",
    "protocol": "sftp",
    "port": 22,
    "username": "sftp_ssismgtomvoj",
    "password": "1TuV6ox2sSRr7484",
    "remotePath": "/",
    "uploadOnSave": false
}
```

---

## Step 2: Navigate to WordPress Directory

Once connected, navigate to WordPress installation:
- Usually: `/public_html/` or `/htdocs/` or `/www/`
- Look for WordPress files: `wp-config.php`, `wp-content/`, etc.

**Common paths:**
- `/home/sftp_ssismgtomvoj/public_html/`
- `/var/www/html/`
- `/home/username/domains/backend.joinremaxex.com/public_html/`

---

## Step 3: Upload PHP Files

### Create Plugin Directory

1. Navigate to: `/wp-content/plugins/`
2. Create new folder: `remax-integration`
3. Upload these 3 files to this folder:
   - `remax-custom-post-types.php`
   - `remax-rest-api.php`
   - `remax-webhooks.php`

### Create Main Plugin File

In `/wp-content/plugins/remax-integration/` create `remax-integration.php`:

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

---

## Step 4: Edit wp-config.php

1. Navigate to WordPress root directory
2. Download `wp-config.php` to your computer
3. Open in text editor
4. Find: `/* That's all, stop editing! Happy publishing. */`
5. Add **BEFORE** that line:

```php
// REMAX Integration Webhook URL
define('REMAX_WEBHOOK_URL', 'https://joinremaxex.com/api/webhooks/wordpress');
```

6. Save file
7. Upload back to server (overwrite existing)

---

## Step 5: Activate Plugin

1. Go to: https://backend.joinremaxex.com/wp-admin
2. Login with: marketing@remaxex.com
3. Navigate to: **Plugins** → **Installed Plugins**
4. Find: **REMAX Integration**
5. Click: **Activate**

---

## Step 6: Verify Installation

### Test REST API

Open browser and visit:
```
https://backend.joinremaxex.com/wp-json/wp/v2/agents
```

Should return: `[]` (empty array is OK)

### Test Custom Endpoint

Visit:
```
https://backend.joinremaxex.com/wp-json/remax/v1/hero
```

Should return JSON with hero data (or empty if not configured yet)

---

## Step 7: Configure Next.js

The `.env.local` file has been created with:
```env
NEXT_PUBLIC_WORDPRESS_URL=https://backend.joinremaxex.com
WORDPRESS_WEBHOOK_SECRET=remax-webhook-secret-2024
```

**Restart Next.js dev server:**
```bash
npm run dev
```

---

## Step 8: Add Content

1. **WordPress Admin** → **Agents** → Add New
2. Upload image, enter name, set order
3. Publish
4. **Refresh Next.js site** → Should show WordPress content!

---

## Troubleshooting

### Can't connect via SFTP
- Verify IP: 172.105.20.212
- Check port 22 is open
- Try different SFTP client
- Contact KloudBean support

### Can't find WordPress directory
- Check KloudBean dashboard for exact path
- Look for `wp-config.php` file
- Check application settings in KloudBean

### Plugin not showing
- Verify files uploaded correctly
- Check file permissions (644 for files, 755 for folders)
- Clear WordPress cache

### REST API not working
- Verify plugin is activated
- Check WordPress permalinks settings
- Test endpoint directly in browser

---

## Quick Checklist

- [ ] Connected via SFTP
- [ ] Found WordPress directory
- [ ] Created `/wp-content/plugins/remax-integration/` folder
- [ ] Uploaded 3 PHP files
- [ ] Created `remax-integration.php`
- [ ] Edited `wp-config.php` with webhook URL
- [ ] Activated plugin in WordPress
- [ ] Tested REST API endpoints
- [ ] Updated Next.js `.env.local`
- [ ] Restarted Next.js server
- [ ] Added test content in WordPress
- [ ] Verified content shows on Next.js site

---

## Security Note

After setup, consider:
- Changing webhook secret to something more secure
- Restricting SFTP access if possible
- Using SSH keys instead of password for SFTP

