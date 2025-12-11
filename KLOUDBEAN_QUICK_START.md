# KloudBean Quick Start - 5 Minutes

## Fast Setup for KloudBean

### Step 1: Get Your WordPress URL
Your WordPress URL from KloudBean (usually something like):
- `https://your-site.kloudbean.com`
- Or your custom domain

**Write it down:** _________________________

---

### Step 2: Upload Files to KloudBean

1. **Login to KloudBean Dashboard**
2. **Go to File Manager** (or Files tab)
3. **Navigate to:** `/wp-content/plugins/`
4. **Create folder:** `remax-integration`
5. **Upload these 3 files** (from `wordpress-integration/` folder):
   - `remax-custom-post-types.php`
   - `remax-rest-api.php`
   - `remax-webhooks.php`

6. **Create file:** `remax-integration.php` in same folder
   - Copy code from `KLOUDBEAN_SETUP_GUIDE.md` Step 2

---

### Step 3: Activate Plugin

1. **WordPress Admin** → **Plugins**
2. **Find:** "REMAX Integration"
3. **Click:** "Activate"

---

### Step 4: Configure Webhook

1. **File Manager** → WordPress root
2. **Edit:** `wp-config.php`
3. **Add before** `/* That's all, stop editing! */`:

```php
define('REMAX_WEBHOOK_URL', 'https://your-nextjs-site.com/api/webhooks/wordpress');
```

4. **Save**

---

### Step 5: Test Connection

Visit in browser:
```
https://your-wordpress-site.com/wp-json/wp/v2/agents
```

Should see: `[]` (empty array is OK)

---

### Step 6: Configure Next.js

1. **Edit:** `.env.local`
2. **Add:**
```env
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
```

3. **Restart:** `npm run dev`

---

### Step 7: Add Content

1. **WordPress Admin** → **Agents** → Add New
2. Upload image, enter name, publish
3. **Refresh Next.js site** → Should show WordPress content!

---

## That's It! 🎉

Your site is now connected to WordPress!

**Need help?** See `KLOUDBEAN_SETUP_GUIDE.md` for detailed instructions.

