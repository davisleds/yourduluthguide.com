# Local Development Setup

## ⚠️ Important: Use a Local Server

This website **requires a local web server** to work properly. Opening HTML files directly (`file://` protocol) will cause:

- ❌ Broken image paths
- ❌ Broken navigation links  
- ❌ CORS errors with analytics
- ❌ Map functionality issues

## Quick Start: Run a Local Server

### Option 1: Python (Recommended - Works Everywhere)

```bash
cd /Users/davisledsinger/Desktop/YourDuluthGuide
python3 -m http.server 8000
```

Then open: **http://localhost:8000**

### Option 2: Node.js (if you have it installed)

```bash
cd /Users/davisledsinger/Desktop/YourDuluthGuide
npx http-server -p 8000
```

Then open: **http://localhost:8000**

### Option 3: PHP (if you have it installed)

```bash
cd /Users/davisledsinger/Desktop/YourDuluthGuide
php -S localhost:8000
```

Then open: **http://localhost:8000**

## Why This Is Needed

The website uses:
- **Absolute paths** (`/Restaurant Photos/...`) which work on servers
- **Client-side routing** which requires a server
- **Vercel Analytics** which needs HTTP/HTTPS protocol
- **Google Maps** which may have restrictions on file:// protocol

## Stopping the Server

Press `Ctrl+C` in the terminal to stop the server.

## For Production

On Vercel (or any hosting), these issues don't occur because the files are served over HTTP/HTTPS protocol, not `file://`.

