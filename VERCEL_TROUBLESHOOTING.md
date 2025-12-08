# Vercel 404 Troubleshooting Guide

## Current Status
Restaurant pages using query parameter format: `/restaurant/index.html?slug=restaurant-name`

## Why 404 Might Still Occur

### 1. Check Vercel Project Settings
- Go to Vercel Dashboard > Your Project > Settings > General
- **Framework Preset**: Should be set to "Other" (not Next.js, etc.)
- **Output Directory**: Should be `.` (root directory)
- **Build Command**: Leave empty for static sites
- **Install Command**: Leave empty for static sites

### 2. Verify File Structure
Your project should have:
```
/
├── index.html
├── restaurants.html
├── restaurant/
│   └── index.html  ← This file must exist!
├── restaurants-data.js
└── vercel.json
```

### 3. Test the URL Format
Try accessing directly:
- `https://yourdomain.vercel.app/restaurant/index.html?slug=northern-waters-smokehaus-canal-park`

If this works, the file exists and the issue is with routing.

### 4. Check Deployment Logs
1. Go to Vercel Dashboard
2. Click on your latest deployment
3. Check "Build Logs" for any errors
4. Check "Runtime Logs" if available

### 5. Verify vercel.json is Deployed
1. After deploying, check: `https://yourdomain.vercel.app/vercel.json`
2. It should show your JSON configuration

### 6. Clear Vercel Cache
Sometimes Vercel caches old configurations:
1. Go to Vercel Dashboard > Your Project > Settings
2. Click "Clear Build Cache"
3. Redeploy

### 7. Test Local First
Before deploying to Vercel, test locally:
```bash
python3 -m http.server 8000
```
Then visit: `http://localhost:8000/restaurant/index.html?slug=test-slug`

If this works locally but not on Vercel, it's a deployment issue.

## Quick Fix Options

### Option A: Use Query Parameters (Current Implementation)
URLs will look like: `/restaurant/index.html?slug=restaurant-name`
- ✅ Works everywhere
- ✅ No routing configuration needed
- ⚠️ URLs are slightly longer

### Option B: Fix Rewrites (For Clean URLs)
If you want clean URLs like `/restaurant/restaurant-name`, you need:
1. Proper vercel.json rewrite (already configured)
2. JavaScript that reads slug from path (already implemented)
3. Make sure Vercel recognizes it as a static site

## Current Configuration

### vercel.json
```json
{
  "rewrites": [
    {
      "source": "/restaurant/(.*)",
      "destination": "/restaurant/index.html"
    }
  ],
  "redirects": [
    {
      "source": "/restaurant-template.html",
      "destination": "/restaurants.html",
      "permanent": true
    }
  ]
}
```

### URL Format Used
- Production: `/restaurant/index.html?slug=restaurant-slug`
- This should work on Vercel without any special configuration

## Next Steps if Still Not Working

1. **Check the exact error**: What URL are you trying to access?
2. **Check Vercel Dashboard**: Are there any deployment errors?
3. **Try accessing the file directly**: `/restaurant/index.html` (without slug)
4. **Check browser console**: Are there JavaScript errors?
5. **Verify file paths**: All relative paths use `../` from restaurant/index.html

## Support Resources
- Vercel Docs: https://vercel.com/docs
- Vercel Community: https://community.vercel.com
- Error Codes: https://vercel.com/docs/errors/NOT_FOUND


