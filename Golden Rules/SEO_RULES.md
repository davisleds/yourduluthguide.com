# SEO Golden Rules

## 🔗 URL Migration & Redirects

### Rule 1: Always Use 301 Redirects When Moving Pages
**When moving or renaming pages, ALWAYS implement 301 (Permanent) redirects to preserve SEO value.**

#### Why 301 Redirects Matter:
- Preserves link equity and ranking signals
- Maintains backlinks from external sites
- Prevents 404 errors that hurt user experience
- Signals to search engines that content has permanently moved
- Transfers ranking signals to the new URL

#### Implementation Requirements:

1. **Before Moving/Renaming Any Page:**
   - Document the old URL and new URL
   - Create 301 redirect mapping
   - Test redirects before going live

2. **For Static Sites (Current Setup):**
   - Add redirects to `vercel.json` (for Vercel hosting)
   - Or use `.htaccess` (for Apache servers)
   - Or use `_redirects` file (for Netlify)
   - Ensure redirects are server-side (not JavaScript redirects)

3. **Example 301 Redirect Formats:**

   **Vercel (`vercel.json`):**
   ```json
   {
     "redirects": [
       {
         "source": "/old-page.html",
         "destination": "/new-page.html",
         "permanent": true
       },
       {
         "source": "/restaurant-template.html",
         "destination": "/restaurant/:slug",
         "permanent": true
       }
     ]
   }
   ```

   **Apache (`.htaccess`):**
   ```apache
   Redirect 301 /old-page.html /new-page.html
   ```

   **Netlify (`_redirects`):**
   ```
   /old-page.html /new-page.html 301
   ```

4. **Recent URL Migration:**
   - Old format: `/restaurant-template.html?name=...&rating=...` (long query strings)
   - New format: `/restaurant/[slug]` (clean URLs)
   - **ACTION REQUIRED:** Add 301 redirects for any old restaurant URLs that may have been indexed

## 📋 Additional SEO Rules

### Rule 2: Maintain Consistent URL Structure
- Use lowercase URLs
- Use hyphens to separate words
- Keep URLs descriptive and keyword-rich
- Avoid unnecessary query parameters
- Use canonical URLs to prevent duplicate content

### Rule 3: Preserve Link Equity
- Never break existing internal links
- Update internal links to point to new URLs
- Maintain external backlinks through 301 redirects
- Update sitemap.xml after URL changes

### Rule 4: Monitor & Validate
- Use Google Search Console to identify 404 errors
- Check redirect chains (avoid redirect loops)
- Verify 301 status codes are being served
- Monitor crawl errors after URL changes
- Submit updated sitemap to search engines

### Rule 5: Update Internal References
- Update all internal links pointing to moved pages
- Update navigation menus
- Update sitemap.xml
- Update robots.txt if needed
- Update canonical tags

## ✅ Checklist Before Moving/Renaming Pages

- [ ] Document old URL(s) and new URL(s)
- [ ] Create 301 redirect mapping
- [ ] Test redirects in staging environment
- [ ] Update all internal links
- [ ] Update sitemap.xml
- [ ] Update canonical tags
- [ ] Submit updated sitemap to Google Search Console
- [ ] Monitor 404 errors after deployment
- [ ] Verify 301 status codes are working
- [ ] Check redirect chains (no loops)

## 🚨 Common Mistakes to Avoid

1. ❌ Using 302 (temporary) redirects instead of 301
2. ❌ Using JavaScript redirects instead of server-side
3. ❌ Creating redirect loops
4. ❌ Not updating internal links
5. ❌ Forgetting to update sitemap
6. ❌ Not monitoring for 404 errors after migration

## 📝 Current Site URL Structure

- **Homepage:** `/` or `/index.html`
- **Restaurants List:** `/restaurants.html`
- **Restaurant Detail:** `/restaurant/[slug]` (e.g., `/restaurant/northern-waters-smokehaus-canal-park`)
- **Explore:** `/explore.html`
- **Adventure Detail:** `/restaurant/[slug]` (shared template)
- **Dining Guide:** `/dining.html`
- **Travel Guide:** `/travel-guide.html`

## 🔄 URL Migration History

### December 2024: Restaurant URLs Migration
- **From:** `/restaurant-template.html?name=...&rating=...&reviews=...` (query string format)
- **To:** `/restaurant/[slug]` (clean slug-based URLs)
- **Status:** Migration complete
- **Action Required:** Add 301 redirects for old format URLs if they exist in search engine indexes

---

**Remember:** SEO is a long-term investment. Always prioritize preserving existing rankings and link equity when making URL changes.


