# Fix REST API Returning HTML Instead of JSON

## ❌ Problem
Visiting `https://backend.joinremaxex.com/wp-json/wp/v2/agents` shows a WordPress blog page instead of JSON.

**Expected:** JSON response like `[]` or `[{...}]`  
**Actual:** HTML WordPress page

---

## 🔧 Solution Steps

### Step 1: Fix WordPress Permalinks

This is the most common cause!

1. **Login to WordPress Admin:** https://backend.joinremaxex.com/wp-admin
2. **Go to:** Settings → Permalinks
3. **Select:** "Post name" (or any option other than "Plain")
4. **Click:** "Save Changes"
5. **Test again:** Visit `https://backend.joinremaxex.com/wp-json/wp/v2/agents`

**This should fix it!** Permalinks need to be set for REST API to work.

---

### Step 2: Verify REST API is Enabled

1. **Test base REST API:**
   ```
   https://backend.joinremaxex.com/wp-json/
   ```
   Should return JSON with WordPress info

2. **If this also shows HTML:**
   - REST API might be disabled
   - Check for security plugins blocking it
   - Check server configuration

---

### Step 3: Check .htaccess File

If permalinks don't fix it, check `.htaccess`:

1. **Via SFTP**, download `.htaccess` from WordPress root
2. **Should contain:**
   ```apache
   # BEGIN WordPress
   <IfModule mod_rewrite.c>
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.php$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.php [L]
   </IfModule>
   # END WordPress
   ```
3. **If missing or incorrect**, WordPress can regenerate it when you save permalinks

---

### Step 4: Check for Security Plugins

Some security plugins block REST API:

1. **Check installed plugins:**
   - Wordfence
   - iThemes Security
   - All In One WP Security
   - Any firewall/security plugin

2. **Temporarily disable** security plugins
3. **Test REST API again**
4. **If it works**, configure security plugin to allow REST API

---

### Step 5: Verify Custom Post Type Registration

Check if the custom post type is properly registered:

1. **Test native WordPress posts:**
   ```
   https://backend.joinremaxex.com/wp-json/wp/v2/posts
   ```
   Should return JSON

2. **If posts work but agents don't:**
   - Custom post type might not be registered correctly
   - Check plugin is activated
   - Check PHP files are correct

---

### Step 6: Check Server Configuration

If using KloudBean/Nginx:

1. **Check if Nginx rewrite rules are correct**
2. **Contact KloudBean support** if needed
3. **Verify server allows REST API**

---

## ✅ Quick Fix (Try This First!)

**Most likely fix:**

1. **WordPress Admin** → **Settings** → **Permalinks**
2. **Select:** "Post name"
3. **Click:** "Save Changes"
4. **Test:** `https://backend.joinremaxex.com/wp-json/wp/v2/agents`

**This fixes 90% of REST API issues!**

---

## 🧪 Test After Fix

After applying the fix, test these URLs:

1. **Base REST API:**
   ```
   https://backend.joinremaxex.com/wp-json/
   ```
   Should show JSON with WordPress info

2. **Agents:**
   ```
   https://backend.joinremaxex.com/wp-json/wp/v2/agents
   ```
   Should show: `[]` (empty array is OK)

3. **Team Members:**
   ```
   https://backend.joinremaxex.com/wp-json/wp/v2/team-members
   ```
   Should show: `[]`

4. **Hero:**
   ```
   https://backend.joinremaxex.com/wp-json/remax/v1/hero
   ```
   Should show JSON object

---

## 📝 Expected JSON Response

When working correctly, you should see:

**Agents endpoint:**
```json
[]
```
or
```json
[
  {
    "id": 1,
    "title": {"rendered": "Agent Name"},
    "agent_name": "Agent Name",
    ...
  }
]
```

**NOT HTML page!**

---

## 🔍 Still Not Working?

If permalinks fix doesn't work:

1. **Check browser console** for errors
2. **Try different browser** or incognito mode
3. **Check KloudBean error logs**
4. **Verify PHP files are correct**
5. **Contact KloudBean support** for server configuration

---

## ✅ Success Indicators

You'll know it's fixed when:
- ✅ URL returns JSON (not HTML)
- ✅ Browser shows raw JSON text
- ✅ No WordPress page displayed
- ✅ JSON is properly formatted

