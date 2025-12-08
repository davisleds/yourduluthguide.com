// Vercel Analytics for Static HTML Sites
// This file should be included in all HTML pages
// Make sure to run: npm install @vercel/analytics

(function() {
    // For static HTML sites, Vercel Analytics is typically enabled in the Vercel Dashboard
    // and works automatically when deployed. However, if you want to manually add tracking:
    
    if (typeof window !== 'undefined' && window.location.hostname) {
        // Vercel Analytics script - this will work when deployed on Vercel
        // and Analytics is enabled in the dashboard
        var script = document.createElement('script');
        script.src = 'https://va.vercel-scripts.com/v1/script.js';
        script.defer = true;
        script.setAttribute('data-domain', window.location.hostname);
        document.head.appendChild(script);
    }
})();

