# Local Development Setup

## Running the Site Locally

This site uses clean URL routing (`/restaurant/[slug]`) which requires a web server to work properly. Opening HTML files directly in a browser (`file://`) won't work.

### Option 1: Python Simple Server (Recommended)

```bash
# Navigate to the project directory
cd /Users/davisledsinger/Desktop/YourDuluthGuide

# Python 3
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

### Option 2: Node.js http-server

```bash
# Install http-server globally (one time)
npm install -g http-server

# Run the server
cd /Users/davisledsinger/Desktop/YourDuluthGuide
http-server -p 8000
```

Then visit: `http://localhost:8000`

### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: PHP Built-in Server

```bash
php -S localhost:8000
```

## Testing Restaurant URLs

Once the server is running, you can test clean URLs like:
- `http://localhost:8000/restaurant/northern-waters-smokehaus-canal-park`
- `http://localhost:8000/restaurant/big-daddys-burgers-piedmont`
- `http://localhost:8000/restaurant/vitta-pizza-canal-park-duluth`

## Production Deployment

When deployed to Vercel, the `vercel.json` file automatically handles URL routing, so clean URLs will work without any additional configuration.


