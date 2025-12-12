# Check Agent Data - Debugging Guide

## Build Logs Show Success!

✅ **Agents: 1** - WordPress is fetching the agent successfully!

But agent not displaying. Let's debug:

---

## Step 1: Check Agent in WordPress

1. **WordPress Admin** → **Agents** → **Edit "Ken Wilder"**
2. **Check:**
   - ✅ Is it **Published**? (should be)
   - ✅ Does it have **Featured Image** set?
   - ✅ Is **Agent Name** filled in meta box?

---

## Step 2: Test REST API Directly

Visit in browser:
```
https://backend.joinremaxex.com/wp-json/wp/v2/agents?_embed
```

**Check the JSON response:**

1. **Does it have `_embedded`?**
   ```json
   "_embedded": {
     "wp:featuredmedia": [{
       "source_url": "https://..."
     }]
   }
   ```

2. **Does it have `agent_name`?**
   ```json
   "agent_name": "Ken Wilder"
   ```

3. **Does it have `title`?**
   ```json
   "title": {
     "rendered": "Ken Wilder"
   }
   ```

---

## Step 3: Check Browser Console

After rebuilding with new debug code:

1. **Visit your site:** https://joinremaxex.com
2. **Open browser console** (F12)
3. **Look for debug messages:**
   ```
   🔍 Processing agents: 1 [...]
   📸 Agent: { id: 11, title: "...", image_url: "..." }
   ✅ Final agents array: [...]
   ```

**This will show:**
- How many agents were received
- Agent data structure
- Image URL (if available)
- Final processed agents

---

## Step 4: Common Issues

### Issue 1: No Featured Image
**Symptom:** `image_url: null` in console
**Fix:** Set featured image in WordPress

### Issue 2: Image URL Not Accessible
**Symptom:** Image URL exists but doesn't load
**Fix:** Check image URL in browser, verify it's accessible

### Issue 3: Agent Name Empty
**Symptom:** `agent_name: ""` but `title` should work as fallback
**Fix:** Fill in agent_name in WordPress meta box

### Issue 4: Fallback Triggering
**Symptom:** Console shows fallback agents array
**Fix:** Check if `wpAgents.length > 0` is false

---

## Step 5: After Rebuild

After KloudBean rebuilds with new debug code:

1. **Check build logs** - Should show agent fetched
2. **Visit site** - Open browser console
3. **Check debug messages** - See what agent data looks like
4. **Share console output** - So we can see what's wrong

---

## Expected Console Output

**If working correctly:**
```
🔍 Processing agents: 1 [{...}]
📸 Agent: {
  id: 11,
  title: "Ken Wilder",
  agent_name: "Ken Wilder",
  final_name: "Ken Wilder",
  featured_media: 12,
  has_embedded: true,
  has_featured_media: true,
  image_url: "https://backend.joinremaxex.com/wp-content/uploads/..."
}
✅ Final agents array: [{ src: "https://...", name: "Ken Wilder" }]
```

**If not working:**
- Check what's missing in the output
- Share the console output for debugging

---

## Quick Fixes

### If Image URL is null:
1. Go to WordPress → Agents → Edit
2. Set Featured Image
3. Update agent
4. Rebuild site

### If Agent Name is empty:
1. Go to WordPress → Agents → Edit
2. Fill "Agent Name" in meta box
3. Update agent
4. Rebuild site

### If _embedded is missing:
1. Check REST API response has `_embed` parameter
2. Verify WordPress REST API is working
3. Check if featured image is set

---

## Next Steps

1. ✅ Rebuild on KloudBean (with new debug code)
2. ✅ Visit site and open browser console
3. ✅ Check debug messages
4. ✅ Share console output
5. ✅ Fix based on what's missing

The debug logs will show exactly what's wrong! 🔍

