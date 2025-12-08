# Cross-Device Vote Syncing Setup

## Current Status
✅ All restaurants now always start with 1 upvote (never below 1)
⚠️ Votes are currently stored in localStorage (device-specific, doesn't sync)

## To Enable Cross-Device Syncing

You'll need a backend database. Here are your options:

### Option 1: Firebase Realtime Database (Recommended - Free)
1. Go to https://firebase.google.com
2. Create a new project
3. Enable Realtime Database
4. Copy your Firebase config
5. I can help you integrate it - just provide your Firebase config

### Option 2: Vercel Serverless Functions + Database
1. Use Vercel KV (Redis) - free tier available
2. Create API endpoints in `/api/vote.js`
3. Store votes in Redis

### Option 3: Simple JSON API
1. Use a service like JSONBin.io or Supabase
2. Free tier available
3. Simple REST API calls

## What I've Already Fixed
- ✅ All restaurants always start with 1 upvote
- ✅ Net score never goes below 1
- ✅ Vote counting logic prevents going below minimum

## Next Steps
If you want cross-device syncing, let me know which option you prefer and I'll help implement it!

