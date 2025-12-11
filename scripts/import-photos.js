const fs = require('fs');
const path = require('path');

// Configuration
const SOURCE_DIR = path.join(__dirname, '..', 'naturephotos');
const DEST_IMAGE_DIR = path.join(__dirname, '..', 'public', 'images', 'nature');
const OUTPUT_JSON = path.join(__dirname, '..', 'src', 'data', 'parks.json');

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

/**
 * Convert park name to URL-friendly ID (lowercase, hyphens)
 */
function nameToId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Parse credits.txt file
 * Returns an object mapping filename to credit info
 */
function parseCredits(creditsPath) {
  const credits = {};
  
  if (!fs.existsSync(creditsPath)) {
    console.warn(`  ⚠️  No credits.txt found in ${creditsPath}`);
    return credits;
  }
  
  const content = fs.readFileSync(creditsPath, 'utf-8');
  const sections = content.split('--------------------').filter(s => s.trim());
  
  for (const section of sections) {
    const lines = section.trim().split('\n');
    let filename = null;
    let author = null;
    let license = null;
    let source = null;
    
    for (const line of lines) {
      if (line.startsWith('File:')) {
        filename = line.replace(/^File:\s*/, '').trim();
      } else if (line.startsWith('Author:')) {
        author = line.replace(/^Author:\s*/, '').trim();
      } else if (line.startsWith('License:')) {
        license = line.replace(/^License:\s*/, '').trim();
      } else if (line.startsWith('Source:')) {
        source = line.replace(/^Source:\s*/, '').trim();
      }
    }
    
    if (filename) {
      credits[filename] = {
        author: author || 'Unknown',
        license: license || 'Unknown',
        source: source || null
      };
    }
  }
  
  return credits;
}

/**
 * Determine priority based on filename
 */
function getPriority(filename) {
  const lowerName = filename.toLowerCase();
  if (lowerName.includes('hero') || lowerName.includes('cover')) {
    return 'hero';
  }
  return 'gallery';
}

/**
 * Process a single park folder
 */
function processParkFolder(parkName, parkPath) {
  const parkId = nameToId(parkName);
  console.log(`\n📁 Processing: ${parkName} (ID: ${parkId})`);
  
  // Create destination directory
  const destDir = path.join(DEST_IMAGE_DIR, parkId);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`  ✓ Created directory: ${destDir}`);
  }
  
  // Parse credits
  const creditsPath = path.join(parkPath, 'credits.txt');
  const credits = parseCredits(creditsPath);
  
  // Get all image files
  const files = fs.readdirSync(parkPath);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return IMAGE_EXTENSIONS.includes(ext);
  });
  
  if (imageFiles.length === 0) {
    console.log(`  ⚠️  No images found in ${parkName}`);
    return null;
  }
  
  console.log(`  📸 Found ${imageFiles.length} images`);
  
  // Process each image
  const images = [];
  for (const imageFile of imageFiles) {
    const srcPath = path.join(parkPath, imageFile);
    const destPath = path.join(destDir, imageFile);
    
    // Move file (or copy if it already exists in destination)
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`  ✓ Moved: ${imageFile}`);
    } else {
      console.log(`  ⊙ Skipped (exists): ${imageFile}`);
    }
    
    // Get credit info
    const creditInfo = credits[imageFile] || {
      author: 'Unknown',
      license: 'Unknown',
      source: null
    };
    
    // Determine priority
    const priority = getPriority(imageFile);
    
    // Build image object
    const imageObj = {
      src: `/images/nature/${parkId}/${imageFile}`,
      credit: {
        author: creditInfo.author,
        license: creditInfo.license
      },
      priority: priority
    };
    
    if (creditInfo.source) {
      imageObj.credit.source = creditInfo.source;
    }
    
    images.push(imageObj);
  }
  
  return {
    parkId: parkId,
    title: parkName,
    images: images
  };
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Starting photo import process...\n');
  console.log(`Source: ${SOURCE_DIR}`);
  console.log(`Destination: ${DEST_IMAGE_DIR}`);
  console.log(`Output: ${OUTPUT_JSON}`);
  
  // Check if source directory exists
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Error: Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }
  
  // Create destination directories
  if (!fs.existsSync(DEST_IMAGE_DIR)) {
    fs.mkdirSync(DEST_IMAGE_DIR, { recursive: true });
    console.log(`✓ Created destination directory`);
  }
  
  if (!fs.existsSync(path.dirname(OUTPUT_JSON))) {
    fs.mkdirSync(path.dirname(OUTPUT_JSON), { recursive: true });
    console.log(`✓ Created data directory`);
  }
  
  // Read existing parks.json if it exists
  let existingParks = {};
  if (fs.existsSync(OUTPUT_JSON)) {
    try {
      const existing = JSON.parse(fs.readFileSync(OUTPUT_JSON, 'utf-8'));
      // Convert array to object for easier lookup
      if (Array.isArray(existing)) {
        existing.forEach(park => {
          existingParks[park.parkId] = park;
        });
      } else if (typeof existing === 'object') {
        existingParks = existing;
      }
      console.log(`\n📖 Found existing parks.json with ${Object.keys(existingParks).length} parks`);
    } catch (e) {
      console.warn(`⚠️  Could not parse existing parks.json: ${e.message}`);
    }
  }
  
  // Get all park folders
  const parkFolders = fs.readdirSync(SOURCE_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  if (parkFolders.length === 0) {
    console.error(`❌ No park folders found in ${SOURCE_DIR}`);
    process.exit(1);
  }
  
  console.log(`\n📂 Found ${parkFolders.length} park folders\n`);
  
  // Process each park
  const parks = [];
  for (const parkName of parkFolders) {
    const parkPath = path.join(SOURCE_DIR, parkName);
    const parkData = processParkFolder(parkName, parkPath);
    
    if (parkData) {
      // Merge with existing data if available
      if (existingParks[parkData.parkId]) {
        console.log(`  🔄 Merging with existing data for ${parkData.parkId}`);
        const existing = existingParks[parkData.parkId];
        // Combine images, avoiding duplicates
        const existingSrcs = new Set(existing.images.map(img => img.src));
        parkData.images.forEach(img => {
          if (!existingSrcs.has(img.src)) {
            existing.images.push(img);
          }
        });
        // Update title if needed
        if (existing.title !== parkData.title) {
          console.log(`  📝 Updating title: "${existing.title}" → "${parkData.title}"`);
        }
        parks.push(existing);
      } else {
        parks.push(parkData);
      }
    }
  }
  
  // Sort parks by title
  parks.sort((a, b) => a.title.localeCompare(b.title));
  
  // Write output JSON
  const output = JSON.stringify(parks, null, 2);
  fs.writeFileSync(OUTPUT_JSON, output, 'utf-8');
  
  console.log(`\n✅ Success! Processed ${parks.length} parks`);
  console.log(`📝 Output written to: ${OUTPUT_JSON}`);
  console.log(`\n📊 Summary:`);
  parks.forEach(park => {
    const heroCount = park.images.filter(img => img.priority === 'hero').length;
    const galleryCount = park.images.filter(img => img.priority === 'gallery').length;
    console.log(`  • ${park.title}: ${park.images.length} images (${heroCount} hero, ${galleryCount} gallery)`);
  });
  
  console.log(`\n🎉 Done!`);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { main };

