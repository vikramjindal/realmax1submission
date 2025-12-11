# 🚀 Quick Start - KloudBean Integration

## Your Setup Details

✅ **WordPress:** https://backend.joinremaxex.com  
✅ **Frontend:** https://joinremaxex.com  
✅ **SFTP:** 172.105.20.212 (sftp_ssismgtomvoj)  
✅ **Next.js:** Configured with `.env.local`

---

## ⚡ 5-Minute Setup

### 1️⃣ Upload Files (2 minutes)

**Via FileZilla:**
```
Host: sftp://172.105.20.212
User: sftp_ssismgtomvoj
Pass: 1TuV6ox2sSRr7484
Port: 22
```

**Navigate to:** `/wp-content/plugins/`  
**Create folder:** `remax-integration`  
**Upload 3 files:**
- remax-custom-post-types.php
- remax-rest-api.php
- remax-webhooks.php

**Create file:** `remax-integration.php` (see code below)

---

### 2️⃣ Activate Plugin (1 minute)

1. Login: https://backend.joinremaxex.com/wp-admin
2. Go to: **Plugins**
3. Activate: **REMAX Integration**

---

### 3️⃣ Configure Webhook (1 minute)

**Edit `wp-config.php`:**
Add this line before `/* That's all, stop editing! */`:

```php
define('REMAX_WEBHOOK_URL', 'https://joinremaxex.com/api/webhooks/wordpress');
```

---

### 4️⃣ Test (1 minute)

Visit in browser:
```
https://backend.joinremaxex.com/wp-json/wp/v2/agents
```

Should see: `[]` ✅

---

### 5️⃣ Restart Next.js

```bash
npm run dev
```

Visit: http://localhost:3000

---

## 📝 Plugin File Code

Create `remax-integration.php`:

```php
<?php
/**
 * Plugin Name: REMAX Integration
 * Description: Headless CMS for REMAX Excellence
 * Version: 1.0.0
 */
if (!defined('ABSPATH')) exit;
require_once plugin_dir_path(__FILE__) . 'remax-custom-post-types.php';
require_once plugin_dir_path(__FILE__) . 'remax-rest-api.php';
require_once plugin_dir_path(__FILE__) . 'remax-webhooks.php';
```

---

## ✅ Done!

Now you can:
- Add agents in WordPress → Shows on homepage carousel
- Add team members → Shows in team section
- Add testimonials → Shows in testimonials section
- Edit hero section → Updates homepage

**All editable from WordPress admin!** 🎉

---

## 📚 Full Guides

- **SFTP Setup:** `KLOUDBEAN_SFTP_SETUP.md`
- **Complete Guide:** `SETUP_COMPLETE.md`
- **Test Connection:** `node test-wordpress-connection-kloudbean.js`

