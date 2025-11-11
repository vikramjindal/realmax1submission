# FollowUpBoss CRM Integration Guide

This guide explains how to set up and use the FollowUpBoss CRM integration for the RE/MAX Excellence website.

## Overview

The website now automatically sends all "Join Excellence" form submissions to your FollowUpBoss CRM account. This integration helps you:
- Automatically capture leads from your website
- Track and follow up with potential agents
- Organize leads with custom fields and tags
- Maintain all lead information in one centralized CRM

## Setup Instructions

### Step 1: Get Your FollowUpBoss API Key

1. Log in to your FollowUpBoss account
2. Go to **Settings** > **API**
3. Generate or copy your **API Key**
4. Keep this key secure - you'll need it for the next step

### Step 2: Configure Environment Variables

1. In your project root directory, create a file named `.env.local`
2. Add the following configuration:

```bash
# FollowUpBoss API Configuration
FOLLOWUPBOSS_API_KEY=your_actual_api_key_here
FOLLOWUPBOSS_API_URL=https://api.followupboss.com/v1
```

3. Replace `your_actual_api_key_here` with your actual FollowUpBoss API key
4. **Important**: Never commit the `.env.local` file to git (it's already in `.gitignore`)

### Step 3: Restart Your Development Server

After adding the environment variables:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 4: Test the Integration

1. Go to your website: `http://localhost:3000`
2. Click any "Join Excellence" or "Join Us" button
3. Fill out the form completely
4. Click "Submit Application"
5. Check your FollowUpBoss account - a new lead should appear within a few seconds

## What Data is Sent to FollowUpBoss?

When a form is submitted, the following information is sent to your CRM:

### Basic Contact Information:
- **First Name** (extracted from full name)
- **Last Name** (extracted from full name)
- **Email Address**
- **Phone Number** (stored as "mobile" type)

### Custom Fields:
- **Experience Level**: Brand new / 1-2 years / 3-5 years / 5+ years
- **Current Brokerage**: Their current real estate brokerage
- **Switch Timing**: When they plan to switch (Immediately / 1-3 months / 3-6 months)
- **Notes**: Any additional information they provide

### Lead Organization:
- **Tags**: Automatically tagged with:
  - "Website Lead"
  - "Join Team Form"
  - Their experience level (for easy filtering)
- **Source**: Marked as "Website - Join Excellence Form"
- **Status**: Set to "New"

## Form Validation

The form requires the following fields:
- ✅ Full Name
- ✅ Phone Number
- ✅ Email
- ✅ Experience Level
- ✅ When Planning to Switch

Optional fields:
- Current Brokerage
- Notes

## User Experience

### Loading State:
- When submitting, the button shows "Submitting..." and is disabled
- Both Submit and Cancel buttons are disabled during submission

### Success:
- Shows success alert: "Thank you for your interest! We will contact you soon."
- Form closes automatically
- Form fields reset for next use

### Error Handling:
- If submission fails, an error message is displayed above the buttons
- User can try again or cancel
- Error details are logged for troubleshooting

## API Endpoint

The integration uses a custom API route:
- **Endpoint**: `/api/submit-to-crm`
- **Method**: POST
- **Location**: `src/pages/api/submit-to-crm.ts`

## Troubleshooting

### Issue: "CRM integration is not properly configured"
**Solution**: Make sure you've added the `FOLLOWUPBOSS_API_KEY` to `.env.local` and restarted the server.

### Issue: Leads not appearing in FollowUpBoss
**Solution**: 
1. Check that your API key is correct
2. Verify the API key has proper permissions in FollowUpBoss
3. Check browser console and server logs for error messages

### Issue: API authentication errors
**Solution**:
1. Verify your API key is correct
2. Make sure there are no extra spaces in the `.env.local` file
3. Restart your development server

## Security Best Practices

✅ **DO**:
- Keep your API key in `.env.local` only
- Never commit `.env.local` to git
- Use environment variables in production (Vercel, Netlify, etc.)
- Regularly rotate your API keys

❌ **DON'T**:
- Never hardcode API keys in your code
- Never share API keys in public repositories
- Never commit API keys to version control

## Production Deployment

When deploying to production (e.g., Vercel, Netlify):

1. Add environment variables in your hosting platform's dashboard:
   - `FOLLOWUPBOSS_API_KEY` = your_api_key
   - `FOLLOWUPBOSS_API_URL` = https://api.followupboss.com/v1

2. The integration will work automatically after deployment

### Vercel Example:
1. Go to your project in Vercel dashboard
2. Settings → Environment Variables
3. Add `FOLLOWUPBOSS_API_KEY` with your key value
4. Add `FOLLOWUPBOSS_API_URL` with the API URL
5. Redeploy your application

### Netlify Example:
1. Go to Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add your environment variables
4. Trigger a new deployment

## Testing in Development

You can test the form submission:

1. **Success Case**: Fill out the form completely and submit
2. **Validation Case**: Try submitting without required fields
3. **Network Error Case**: Turn off internet and try submitting

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Check your server terminal for API errors
3. Verify your FollowUpBoss API key is active and has permissions
4. Contact FollowUpBoss support if API issues persist

## File References

- **Form Component**: `src/components/JoinUsModal.tsx`
- **API Route**: `src/pages/api/submit-to-crm.ts`
- **Context Provider**: `src/contexts/JoinUsModalContext.tsx`
- **Environment Config**: `.env.local` (create this file)

---

**Last Updated**: [Current Date]
**Integration Version**: 1.0

