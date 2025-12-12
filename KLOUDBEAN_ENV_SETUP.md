# Setting Up Environment Variables on KloudBean

## Why .env File is Missing

`.env.local` files are **gitignored** (not pushed to git) for security reasons. You need to create it manually on your server.

---

## Option 1: Create .env.local File on Server (Recommended)

### Via SFTP/File Manager:

1. **Connect to your KloudBean server** (SFTP or File Manager)
2. **Navigate to your Next.js project root** (where `package.json` is)
3. **Create new file:** `.env.local`
4. **Add this content:**

```env
NEXT_PUBLIC_WORDPRESS_URL=https://backend.joinremaxex.com
WORDPRESS_WEBHOOK_SECRET=remax-webhook-secret-2024
```

5. **Save the file**

### Via SSH/Terminal (if you have access):

```bash
cd /path/to/your/nextjs/project
nano .env.local
```

Paste:
```env
NEXT_PUBLIC_WORDPRESS_URL=https://backend.joinremaxex.com
WORDPRESS_WEBHOOK_SECRET=remax-webhook-secret-2024
```

Save: `Ctrl+X`, then `Y`, then `Enter`

---

## Option 2: Set Environment Variables in KloudBean Dashboard

Many hosting platforms allow setting environment variables in the dashboard:

1. **Login to KloudBean Dashboard**
2. **Go to your Next.js application**
3. **Look for:** "Environment Variables", "Config", or "Settings"
4. **Add these variables:**

| Variable Name | Value |
|--------------|-------|
| `NEXT_PUBLIC_WORDPRESS_URL` | `https://backend.joinremaxex.com` |
| `WORDPRESS_WEBHOOK_SECRET` | `remax-webhook-secret-2024` |

5. **Save/Restart application**

---

## Option 3: Create .env.local via Command Line

If you have SSH access:

```bash
# Navigate to project
cd /path/to/remax/frontend

# Create .env.local
cat > .env.local << EOF
NEXT_PUBLIC_WORDPRESS_URL=https://backend.joinremaxex.com
WORDPRESS_WEBHOOK_SECRET=remax-webhook-secret-2024
EOF

# Verify it was created
cat .env.local
```

---

## Verify Environment Variables

### Check if file exists:

```bash
ls -la .env.local
```

### Check if variables are loaded:

```bash
# In Next.js, you can check in code:
console.log(process.env.NEXT_PUBLIC_WORDPRESS_URL);
```

---

## Important Notes

1. **File Location:**
   - Must be in the **root** of your Next.js project
   - Same directory as `package.json` and `next.config.mjs`

2. **File Name:**
   - Use `.env.local` (not `.env`)
   - Next.js automatically loads `.env.local`

3. **After Creating:**
   - **Restart your Next.js application** for changes to take effect
   - KloudBean might auto-restart, or you may need to manually restart

4. **Security:**
   - `.env.local` is gitignored (not in git)
   - Don't commit it to git
   - Keep it secure on the server

---

## Troubleshooting

### Still not working?

1. **Check file location:**
   - Must be in project root
   - Same level as `package.json`

2. **Check file permissions:**
   ```bash
   chmod 644 .env.local
   ```

3. **Restart application:**
   - Stop and start Next.js app in KloudBean
   - Or restart the server

4. **Check KloudBean logs:**
   - Look for environment variable errors
   - Check application logs

5. **Verify variable names:**
   - Must start with `NEXT_PUBLIC_` for client-side variables
   - No spaces around `=`

---

## Quick Checklist

- [ ] Created `.env.local` file in project root
- [ ] Added `NEXT_PUBLIC_WORDPRESS_URL`
- [ ] Added `WORDPRESS_WEBHOOK_SECRET`
- [ ] File saved correctly
- [ ] Application restarted
- [ ] Variables working (test in code)

---

## Test After Setup

Once `.env.local` is created:

1. **Restart Next.js application**
2. **Check browser console** for any errors
3. **Verify WordPress connection** works
4. **Test homepage** loads WordPress content

---

## Alternative: Use KloudBean Environment Variables

If KloudBean has an environment variables section in the dashboard, use that instead of `.env.local` file - it's often easier and more secure!

