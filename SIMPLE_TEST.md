# Simple Test Instructions

## What I Just Fixed
I changed all the file paths from relative paths (`../`) to absolute paths (`/`) which works better on Vercel.

## To Test (No Command Line Needed!)

### Option 1: Just Deploy to Vercel
1. Save all your files
2. Commit and push to GitHub (if using Git) OR upload to Vercel
3. Wait for deployment to finish
4. Visit: `https://yourdomain.vercel.app/restaurant/index.html?slug=northern-waters-smokehaus-canal-park`

### Option 2: Check in Browser Console
1. Open your deployed site
2. Right-click → "Inspect" (or press F12)
3. Click the "Console" tab
4. Look for errors (they'll be in red)
5. Look for messages like:
   - ✅ "Data loaded: 50 restaurants 40 adventures"
   - ✅ "Found place: Northern Waters Smokehaus"
   - ❌ "Failed to load restaurant data"
   - ❌ "404" or "ERR_FILE_NOT_FOUND"

## What Changed
- `/styles.css` (instead of `../styles.css`)
- `/restaurants-data.js` (instead of `../restaurants-data.js`)
- `/adventures-data.js` (instead of `../adventures-data.js`)
- `/restaurants.html` (instead of `../restaurants.html`)

All paths now start with `/` which means "from the website root" - this works the same on Vercel and local servers.

## If It Still Doesn't Work
Check the browser console and tell me:
1. What error messages you see (copy/paste them)
2. Whether the scripts show as "404" (not found)
3. What URL you're trying to visit

The console will tell us exactly what's wrong!

