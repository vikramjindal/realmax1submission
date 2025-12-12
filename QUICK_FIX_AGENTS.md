# Quick Fix: Agents Not Showing

## Problem
Agent "Ken Ilder" exists in WordPress but not showing on homepage.

## Issues Found:
1. ❌ `agent_name` field is empty in WordPress
2. ⚠️ Site might need rebuild after adding agent

---

## Fix Step 1: Update Agent in WordPress

1. **WordPress Admin** → **Agents** → **Click "Ken Ilder"** (or Edit)
2. **Scroll down to "Agent Information" meta box**
3. **Fill in "Agent Name":**
   - Enter: "Ken Ilder" (or any name you want)
4. **Verify Featured Image is set:**
   - Should show an image
   - If not, click "Set featured image" and upload
5. **Click "Update"**

**After updating, test this URL:**
```
https://backend.joinremaxex.com/wp-json/wp/v2/agents?_embed
```

Should now show:
```json
{
  "agent_name": "Ken Ilder",  // ✅ Not empty anymore!
  "title": {"rendered": "Ken Ilder"},
  "_embedded": {
    "wp:featuredmedia": [{
      "source_url": "https://..."
    }]
  }
}
```

---

## Fix Step 2: Rebuild Next.js Site

After updating agent in WordPress, rebuild your Next.js site:

### On KloudBean Server:

**Option A: Via SSH/Command Line:**
```bash
cd /path/to/your/nextjs/project
npm run build
# Or if using PM2/systemd, restart the service
```

**Option B: Via KloudBean Dashboard:**
1. Go to your Next.js application
2. Click "Rebuild" or "Redeploy"
3. Wait for build to complete

**Option C: Trigger Revalidation (if webhook works):**
- Edit the agent again in WordPress
- This should trigger webhook
- Next.js will revalidate automatically

---

## Fix Step 3: Verify Environment Variable

Make sure `.env.local` exists on server with:
```env
NEXT_PUBLIC_WORDPRESS_URL=https://backend.joinremaxex.com
```

---

## Test After Fix

1. **Check REST API:**
   ```
   https://backend.joinremaxex.com/wp-json/wp/v2/agents?_embed
   ```
   - Should show agent with name and image

2. **Visit your site:**
   ```
   https://joinremaxex.com
   ```
   - Should show agent in carousel

3. **Check browser console (F12):**
   - Look for any errors
   - Check if WordPress data is being fetched

---

## Why This Happens

- **getStaticProps** runs at build time
- When you add new agents, site needs rebuild
- Or wait for ISR revalidation (60 seconds)
- Or webhook triggers revalidation

---

## Quick Test

After fixing agent_name and rebuilding:

1. Agent should appear in carousel
2. Image should display
3. Name should show correctly
4. Carousel should rotate

---

## Still Not Working?

1. Check browser console for errors
2. Verify REST API returns data
3. Check if site is using cached version (hard refresh: Ctrl+F5)
4. Verify environment variable is set
5. Check Next.js build logs

