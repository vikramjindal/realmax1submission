# Fix: Agents Not Showing on Homepage

## Issues Found

1. **Agent Name is Empty:** In WordPress, the `agent_name` field is empty (shows `""` in JSON)
2. **Featured Image Not Loading:** Need to use `_embed` parameter to get images
3. **Site Needs Rebuild:** After adding agents, Next.js needs to rebuild

---

## Fix 1: Update Agent in WordPress

### The Problem:
Your agent "Ken Ilder" has:
- ✅ Title: "Ken Ilder" 
- ❌ Agent Name: Empty (`""`)
- ✅ Featured Image: ID 12 (exists)

### The Solution:
1. **WordPress Admin** → **Agents** → **Edit "Ken Ilder"**
2. **Scroll to "Agent Information" meta box**
3. **Fill in "Agent Name" field:**
   - Enter: "Ken Ilder" (or whatever name you want)
4. **Make sure Featured Image is set:**
   - Should show image ID 12
   - If not, click "Set featured image" and upload/select image
5. **Click "Update"**

---

## Fix 2: Verify REST API Returns Images

Test this URL in browser:
```
https://backend.joinremaxex.com/wp-json/wp/v2/agents?_embed
```

Should show:
- `agent_name` field filled
- `_embedded` object with featured image data

---

## Fix 3: Rebuild Next.js Site

After updating agent in WordPress:

### If using Static Site Generation (SSG):
1. **Rebuild the site:**
   ```bash
   npm run build
   ```

2. **Or trigger revalidation:**
   - The webhook should trigger it automatically
   - Or manually visit: `https://joinremaxex.com/api/webhooks/wordpress` (POST request)

### If using ISR (Incremental Static Regeneration):
- Wait up to 60 seconds (revalidate time)
- Or rebuild manually

---

## Fix 4: Check Featured Image URL

The code uses `getFeaturedImageUrl()` which looks for:
```javascript
agent._embedded?.['wp:featuredmedia']?.[0]?.source_url
```

Make sure the REST API call includes `_embed` parameter:
```javascript
/wp-json/wp/v2/agents?_embed
```

---

## Quick Debug Steps

1. **Check WordPress:**
   - Agent has name in "Agent Information" box
   - Agent has featured image set
   - Agent is published

2. **Test REST API:**
   ```
   https://backend.joinremaxex.com/wp-json/wp/v2/agents?_embed
   ```
   - Should show `agent_name` filled
   - Should show `_embedded` with image

3. **Check Next.js:**
   - `.env.local` has WordPress URL
   - Site rebuilt after adding agent
   - Check browser console for errors

4. **Verify Code:**
   - `getAgents()` uses `?_embed` parameter
   - `getFeaturedImageUrl()` checks `_embedded` object

---

## Expected Result

After fixes:
- ✅ Agent name shows in carousel
- ✅ Agent image displays
- ✅ Carousel rotates through WordPress agents
- ✅ No fallback to hardcoded agents

---

## If Still Not Working

1. **Check browser console** (F12) for errors
2. **Check Next.js build logs** for WordPress fetch errors
3. **Verify environment variable** is set correctly
4. **Test REST API directly** in browser
5. **Check if site is using cached version**

