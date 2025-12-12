# Debug: WordPress Integration Not Working

## Current Status
- ✅ `.env.local` exists on server with WordPress URL
- ✅ Agent exists in WordPress ("Ken Ilder")
- ✅ REST API working (returns JSON)
- ❌ Agents not showing on site

---

## Step-by-Step Debugging

### Step 1: Verify Environment Variable is Loaded

**Check if Next.js can see the environment variable:**

Add this temporarily to `src/pages/index.tsx` in `getStaticProps`:

```typescript
export const getStaticProps: GetStaticProps = async () => {
  console.log('WordPress URL:', process.env.NEXT_PUBLIC_WORDPRESS_URL);
  // ... rest of code
}
```

**Or check in browser console:**
- Open browser DevTools (F12)
- Check Console tab
- Look for any WordPress-related errors

---

### Step 2: Test WordPress API Call

**Check if the API call is actually working:**

In `getStaticProps`, add error logging:

```typescript
export const getStaticProps: GetStaticProps = async () => {
  try {
    console.log('Fetching from WordPress:', process.env.NEXT_PUBLIC_WORDPRESS_URL);
    const agents = await getAgents();
    console.log('Agents fetched:', agents.length, agents);
    // ... rest
  } catch (error) {
    console.error('WordPress fetch error:', error);
    // ... error handling
  }
}
```

---

### Step 3: Check Build Logs

**On KloudBean, check build logs:**
1. Go to your Next.js application
2. Check "Build Logs" or "Deployment Logs"
3. Look for:
   - WordPress URL being logged
   - Any fetch errors
   - Agent count being logged

---

### Step 4: Verify Data Structure

**Test the REST API directly:**

Visit in browser:
```
https://backend.joinremaxex.com/wp-json/wp/v2/agents?_embed
```

**Check:**
- Does it return JSON array?
- Does it have `agent_name` or `title.rendered`?
- Does it have `_embedded.wp:featuredmedia`?

---

### Step 5: Check if Site is Using Cached Version

**Possible issues:**
1. Site might be using cached/old build
2. ISR might not have revalidated yet
3. Browser might be caching

**Try:**
1. Hard refresh: `Ctrl+F5` or `Cmd+Shift+R`
2. Clear browser cache
3. Rebuild site completely
4. Check if it's using static generation vs server-side

---

### Step 6: Verify Code Logic

**Check the agent mapping code:**

In `src/pages/index.tsx`, the code does:
```typescript
const agents = wpAgents.length > 0 
  ? wpAgents.map(agent => ({
      src: getFeaturedImageUrl(agent) || '/images/gallery/default.png',
      name: agent.agent_name || agent.title.rendered || 'Agent'
    }))
  : [/* fallback agents */];
```

**Possible issues:**
- `wpAgents` might be empty array `[]`
- `getFeaturedImageUrl()` might return `null`
- Fallback might be triggering

---

### Step 7: Add Debug Logging

**Add console logs to see what's happening:**

```typescript
export default function Home({ heroData, agents: wpAgents, testimonials: wpTestimonials, teamMembers }: HomeProps) {
  console.log('wpAgents received:', wpAgents);
  console.log('wpAgents length:', wpAgents.length);
  
  const agents = wpAgents.length > 0 
    ? wpAgents.map(agent => {
        const imageUrl = getFeaturedImageUrl(agent);
        console.log('Agent:', agent.title.rendered, 'Image:', imageUrl);
        return {
          src: imageUrl || '/images/gallery/default.png',
          name: agent.agent_name || agent.title.rendered || 'Agent'
        };
      })
    : [/* fallback */];
  
  console.log('Final agents array:', agents);
  // ... rest
}
```

---

## Common Issues & Fixes

### Issue 1: Environment Variable Not Loading
**Fix:** 
- Restart Next.js application
- Verify `.env.local` is in project root
- Check file has no extra spaces or quotes

### Issue 2: WordPress API Returns Empty Array
**Fix:**
- Check if agents are published in WordPress
- Verify REST API endpoint works
- Check if `_embed` parameter is included

### Issue 3: Featured Images Not Loading
**Fix:**
- Verify images are set in WordPress
- Check `_embedded.wp:featuredmedia` exists in API response
- Verify image URLs are accessible

### Issue 4: Site Using Old Build
**Fix:**
- Rebuild site completely
- Clear Next.js cache (`.next` folder)
- Restart application

### Issue 5: getStaticProps Not Running
**Fix:**
- Check if site is using static generation
- Verify build completed successfully
- Check for build errors

---

## Quick Test Commands

### Test 1: Check Environment Variable
```bash
# In Next.js code, log it
console.log(process.env.NEXT_PUBLIC_WORDPRESS_URL);
```

### Test 2: Test WordPress API
```bash
curl https://backend.joinremaxex.com/wp-json/wp/v2/agents?_embed
```

### Test 3: Check Build Output
- Look for "WordPress URL:" in build logs
- Look for "Agents fetched:" in build logs
- Check for any errors

---

## Next Steps

1. **Add debug logging** to see what's happening
2. **Check build logs** on KloudBean
3. **Test REST API** directly in browser
4. **Verify environment variable** is loaded
5. **Check browser console** for errors
6. **Rebuild site** completely

---

## Expected Behavior

**If working correctly:**
- Build logs show: "WordPress URL: https://backend.joinremaxex.com"
- Build logs show: "Agents fetched: 1" (or more)
- Browser console shows agent data
- Homepage shows WordPress agents (not fallback)

**If not working:**
- Build logs show errors
- Browser console shows errors
- Homepage shows fallback agents
- `wpAgents` is empty array

