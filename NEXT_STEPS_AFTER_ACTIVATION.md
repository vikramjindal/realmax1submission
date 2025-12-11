# ✅ Plugin Activated - Next Steps

## 🎉 Great! Plugin is Active

I can see:
- ✅ REMAX Integration plugin activated
- ✅ Custom post types visible: Agents, Team Members, Testimonials, Page Sections

---

## Step 1: Test REST API Endpoints (2 minutes)

Open these URLs in your browser to verify everything works:

### Test 1: Agents Endpoint
```
https://backend.joinremaxex.com/wp-json/wp/v2/agents
```
**Expected:** `[]` (empty array - this is OK, means it's working!)

### Test 2: Team Members Endpoint
```
https://backend.joinremaxex.com/wp-json/wp/v2/team-members
```
**Expected:** `[]` (empty array)

### Test 3: Hero Endpoint
```
https://backend.joinremaxex.com/wp-json/remax/v1/hero
```
**Expected:** JSON object with hero data (may be empty/default values)

### Test 4: REST API Base
```
https://backend.joinremaxex.com/wp-json/
```
**Expected:** WordPress REST API information

**✅ If all return JSON (even empty arrays), you're good to go!**

---

## Step 2: Configure Webhook (Important!)

### Via SFTP or File Manager:

1. **Download `wp-config.php`** from WordPress root directory
2. **Open in text editor**
3. **Find this line:**
   ```php
   /* That's all, stop editing! Happy publishing. */
   ```
4. **Add this line BEFORE it:**
   ```php
   // REMAX Integration Webhook URL
   define('REMAX_WEBHOOK_URL', 'https://joinremaxex.com/api/webhooks/wordpress');
   ```
5. **Save and upload back**

**This allows WordPress to notify Next.js when content changes!**

---

## Step 3: Add Content in WordPress

### Add Agents (Homepage Carousel)

1. **Click "Agents" in WordPress sidebar**
2. **Click "Add New"**
3. **Title:** Enter agent name (e.g., "Aman")
4. **Set Featured Image:**
   - Click "Set featured image"
   - Upload agent photo
   - Click "Set featured image"
5. **Scroll down to "Agent Information" box:**
   - **Agent Name:** (same as title or different)
   - **Display Order:** 0 (for first agent), 1 (for second), etc.
6. **Click "Publish"**
7. **Repeat for all agents**

### Add Team Members

1. **Click "Team Members" in sidebar**
2. **Click "Add New"**
3. **Title:** Enter name (e.g., "Aman Bhandaal")
4. **Set Featured Image:** Upload team member photo
5. **In "Team Member Information" box:**
   - **Role:** e.g., "Broker/Owner"
   - **Phone:** (optional) e.g., "+1 (416) 520-3462"
   - **Email:** e.g., "aman@remaxex.com"
   - **Instagram URL:** (optional)
   - **LinkedIn URL:** (optional)
   - **Display Order:** 0, 1, 2, etc.
6. **Click "Publish"**
7. **Repeat for all team members**

### Add Testimonials

1. **Click "Testimonials" in sidebar**
2. **Click "Add New"**
3. **Title:** Client name (e.g., "Sarah & Michael Chen")
4. **Content:** Enter testimonial text in main editor
5. **In "Testimonial Information" box:**
   - **Role/Title:** e.g., "First-time Homebuyers"
   - **Rating:** 5 (1-5 stars)
   - **Display Order:** 0, 1, 2, etc.
6. **Click "Publish"**

### Configure Hero Section

1. **Click "Settings" → "REMAX Hero"** (in sidebar)
2. **Fill in all fields:**
   - **Title:** "REMAX"
   - **Subtitle:** "EXCELLENCE"
   - **Description:** "One of the Youngest, Fastest-Growing Real Estate Brokerage"
   - **Stats Text:** "120+ Motivated Agents"
   - **Stats Subtext:** "Growing daily"
   - **Background Image URL:** 
     - Upload image to Media Library
     - Copy image URL
     - Paste here
   - **CTA Button Text:** "Join Our Team"
3. **Click "Save Settings"**

---

## Step 4: Test Next.js Connection

1. **Make sure `.env.local` exists** (already created):
   ```env
   NEXT_PUBLIC_WORDPRESS_URL=https://backend.joinremaxex.com
   ```

2. **Restart Next.js dev server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

3. **Visit:** http://localhost:3000

4. **Check browser console** (F12) for any errors

5. **Verify:**
   - Hero section shows WordPress content
   - Agents carousel shows WordPress agents
   - Team section shows WordPress team members
   - Testimonials show WordPress testimonials

---

## Step 5: Verify Everything Works

### Quick Test Checklist:

- [ ] REST API endpoints return JSON
- [ ] Webhook URL configured in wp-config.php
- [ ] At least 1 agent added in WordPress
- [ ] At least 1 team member added
- [ ] At least 1 testimonial added
- [ ] Hero section configured
- [ ] Next.js server restarted
- [ ] Content shows on Next.js site

---

## 🎯 What You Should See

### In WordPress Admin:
- ✅ Custom post types working
- ✅ Can add/edit agents, team, testimonials
- ✅ Hero settings page accessible

### In Next.js Site:
- ✅ Homepage fetches from WordPress
- ✅ Agent carousel rotates WordPress images
- ✅ Team section shows WordPress team
- ✅ Testimonials show WordPress content
- ✅ Hero section uses WordPress data

---

## 🔧 Troubleshooting

### Content not showing on Next.js?
1. Check `.env.local` has correct WordPress URL
2. Restart Next.js server
3. Check browser console for errors
4. Verify REST API endpoints work in browser

### REST API returns 404?
1. Verify plugin is activated
2. Check file permissions (644 for PHP files)
3. Clear WordPress cache
4. Try deactivating/reactivating plugin

### Images not loading?
1. Verify images uploaded to WordPress Media Library
2. Check image URLs are accessible
3. Update Next.js `next.config.mjs` if needed for image domains

---

## 🎉 Success!

Once everything is working:
- ✅ Edit content in WordPress → Updates on Next.js site
- ✅ Add new agents → Appears in carousel
- ✅ Update team members → Updates on site
- ✅ All content manageable from WordPress admin!

**Your headless WordPress setup is complete!** 🚀

