# Testing Restaurant Pages - Debugging Guide

## Current Issue
Restaurant pages showing ERR_FILE_NOT_FOUND error.

## What Was Fixed

### 1. Script Loading Order
- Added `restaurants-data.js` and `adventures-data.js` at the top of `<head>` section
- These MUST load before the code that uses them
- Removed duplicate script tag at bottom

### 2. Data Loading Logic
- Updated `loadRestaurantData()` to wait for both `allRestaurants` and `allAdventures`
- Updated slug lookup to search both restaurants AND adventures
- Improved error logging to show available slugs when not found

### 3. File Structure
```
/restaurant/index.html  ← This file handles all restaurant/adventure detail pages
  - Loads: ../restaurants-data.js
  - Loads: ../adventures-data.js
  - Uses: ../styles.css
```

## Testing Steps

### Local Testing (Recommended First)
```bash
cd /Users/davisledsinger/Desktop/YourDuluthGuide
python3 -m http.server 8000
```

Then visit:
- http://localhost:8000/restaurant/index.html?slug=northern-waters-smokehaus-canal-park
- http://localhost:8000/restaurant/index.html?slug=aerial-lift-bridge-canal-park

### Vercel Testing
After deploying, test:
- https://yourdomain.vercel.app/restaurant/index.html?slug=northern-waters-smokehaus-canal-park

## Common Issues

### Issue: ERR_FILE_NOT_FOUND
**Possible Causes:**
1. Script files not found (check paths use `../` correctly)
2. Vercel not deploying `restaurant/` folder
3. Scripts loading after code that uses them

**Fix:**
- Verify `restaurants-data.js` and `adventures-data.js` exist in root
- Check browser console for 404 errors on script files
- Ensure scripts load in `<head>` before main code

### Issue: "Restaurant not found for slug"
**Possible Causes:**
1. Slug doesn't match (case-sensitive or spelling)
2. Location not matching
3. Data not loaded yet

**Fix:**
- Check browser console - it will show available slugs
- Compare generated slug with slug in URL
- Verify restaurant name and location in `restaurants-data.js`

### Issue: Page loads but shows blank/no data
**Possible Causes:**
1. Data files not loading
2. JavaScript errors preventing render
3. Slug lookup failing silently

**Fix:**
- Open browser DevTools → Console tab
- Look for errors
- Check if `allRestaurants` or `allAdventures` are defined
- Verify slug matches exactly (use console.log output)

## Debug Checklist

- [ ] Script files exist: `restaurants-data.js`, `adventures-data.js`
- [ ] Scripts loaded in `<head>` before main code
- [ ] Paths use `../` (correct for `restaurant/index.html`)
- [ ] Browser console shows "Data loaded: X restaurants, Y adventures"
- [ ] Browser console shows "Found place: [Restaurant Name]"
- [ ] No 404 errors for script files
- [ ] Slug in URL matches slug in console logs

## Expected Console Output (Success)
```
Data loaded: 50 restaurants 40 adventures Total: 90 places
Extracted slug: northern-waters-smokehaus-canal-park
Found place: Northern Waters Smokehaus
```

## Expected Console Output (Error)
```
Extracted slug: northern-waters-smokehaus-canal-park
Place not found for slug: northern-waters-smokehaus-canal-park
Available places (first 5 slugs):
- northern-waters-smokehaus-canal-park
- duluth-grill-lincoln-park
...
```

If you see this, the slug IS in the list, meaning there's a mismatch in the comparison logic.

