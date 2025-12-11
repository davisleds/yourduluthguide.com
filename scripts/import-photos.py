#!/usr/bin/env python3
"""
Import photos from naturephotos folder to public/images/nature and generate parks.json
"""
import os
import json
import shutil
from pathlib import Path

# Configuration
SOURCE_DIR = Path(__file__).parent.parent / 'naturephotos'
DEST_IMAGE_DIR = Path(__file__).parent.parent / 'public' / 'images' / 'nature'
OUTPUT_JSON = Path(__file__).parent.parent / 'src' / 'data' / 'parks.json'

# Supported image extensions
IMAGE_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.webp', '.gif'}

def name_to_id(name):
    """Convert park name to URL-friendly ID (lowercase, hyphens)"""
    import re
    # Convert to lowercase, replace non-alphanumeric with hyphens
    park_id = re.sub(r'[^a-z0-9]+', '-', name.lower())
    # Remove leading/trailing hyphens
    return park_id.strip('-')

def parse_credits(credits_path):
    """Parse credits.txt file and return a dict mapping filename to credit info"""
    credits = {}
    
    if not credits_path.exists():
        print(f"  ⚠️  No credits.txt found in {credits_path.parent}")
        return credits
    
    try:
        content = credits_path.read_text(encoding='utf-8')
        sections = [s.strip() for s in content.split('--------------------') if s.strip()]
        
        for section in sections:
            lines = section.strip().split('\n')
            filename = None
            author = None
            license_text = None
            source = None
            
            for line in lines:
                line = line.strip()
                if line.startswith('File:'):
                    filename = line.replace('File:', '').strip()
                elif line.startswith('Author:'):
                    author = line.replace('Author:', '').strip()
                elif line.startswith('License:'):
                    license_text = line.replace('License:', '').strip()
                elif line.startswith('Source:'):
                    source = line.replace('Source:', '').strip()
            
            if filename:
                credits[filename] = {
                    'author': author or 'Unknown',
                    'license': license_text or 'Unknown',
                    'source': source or None
                }
    except Exception as e:
        print(f"  ⚠️  Error parsing credits.txt: {e}")
    
    return credits

def get_priority(filename):
    """Determine priority based on filename"""
    lower_name = filename.lower()
    if 'hero' in lower_name or 'cover' in lower_name:
        return 'hero'
    return 'gallery'

def process_park_folder(park_name, park_path):
    """Process a single park folder"""
    park_id = name_to_id(park_name)
    print(f"\n📁 Processing: {park_name} (ID: {park_id})")
    
    # Create destination directory
    dest_dir = DEST_IMAGE_DIR / park_id
    dest_dir.mkdir(parents=True, exist_ok=True)
    print(f"  ✓ Created/verified directory: {dest_dir}")
    
    # Parse credits
    credits_path = park_path / 'credits.txt'
    credits = parse_credits(credits_path)
    
    # Get all image files
    image_files = [
        f for f in os.listdir(park_path)
        if Path(f).suffix.lower() in IMAGE_EXTENSIONS
    ]
    
    if not image_files:
        print(f"  ⚠️  No images found in {park_name}")
        return None
    
    print(f"  📸 Found {len(image_files)} images")
    
    # Process each image
    images = []
    for image_file in image_files:
        src_path = park_path / image_file
        dest_path = dest_dir / image_file
        
        # Move file (or copy if it already exists in destination)
        if not dest_path.exists():
            shutil.copy2(src_path, dest_path)
            print(f"  ✓ Moved: {image_file}")
        else:
            print(f"  ⊙ Skipped (exists): {image_file}")
        
        # Get credit info
        credit_info = credits.get(image_file, {
            'author': 'Unknown',
            'license': 'Unknown',
            'source': None
        })
        
        # Determine priority
        priority = get_priority(image_file)
        
        # Build image object
        image_obj = {
            'src': f'/images/nature/{park_id}/{image_file}',
            'credit': {
                'author': credit_info['author'],
                'license': credit_info['license']
            },
            'priority': priority
        }
        
        if credit_info.get('source'):
            image_obj['credit']['source'] = credit_info['source']
        
        images.append(image_obj)
    
    return {
        'parkId': park_id,
        'title': park_name,
        'images': images
    }

def main():
    """Main function"""
    print('🚀 Starting photo import process...\n')
    print(f'Source: {SOURCE_DIR}')
    print(f'Destination: {DEST_IMAGE_DIR}')
    print(f'Output: {OUTPUT_JSON}')
    
    # Check if source directory exists
    if not SOURCE_DIR.exists():
        print(f'❌ Error: Source directory not found: {SOURCE_DIR}')
        return 1
    
    # Create destination directories
    DEST_IMAGE_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    print(f'✓ Created/verified directories')
    
    # Read existing parks.json if it exists
    existing_parks = {}
    if OUTPUT_JSON.exists():
        try:
            with open(OUTPUT_JSON, 'r', encoding='utf-8') as f:
                existing = json.load(f)
            # Convert array to dict for easier lookup
            if isinstance(existing, list):
                for park in existing:
                    existing_parks[park['parkId']] = park
            elif isinstance(existing, dict):
                existing_parks = existing
            print(f'\n📖 Found existing parks.json with {len(existing_parks)} parks')
        except Exception as e:
            print(f'⚠️  Could not parse existing parks.json: {e}')
    
    # Get all park folders
    park_folders = [
        d for d in SOURCE_DIR.iterdir()
        if d.is_dir() and not d.name.startswith('.')
    ]
    
    if not park_folders:
        print(f'❌ No park folders found in {SOURCE_DIR}')
        return 1
    
    print(f'\n📂 Found {len(park_folders)} park folders\n')
    
    # Process each park
    parks = []
    for park_path in sorted(park_folders):
        park_name = park_path.name
        park_data = process_park_folder(park_name, park_path)
        
        if park_data:
            # Merge with existing data if available
            if park_data['parkId'] in existing_parks:
                print(f"  🔄 Merging with existing data for {park_data['parkId']}")
                existing = existing_parks[park_data['parkId']]
                # Combine images, avoiding duplicates
                existing_srcs = {img['src'] for img in existing['images']}
                for img in park_data['images']:
                    if img['src'] not in existing_srcs:
                        existing['images'].append(img)
                # Update title if needed
                if existing['title'] != park_data['title']:
                    print(f"  📝 Updating title: \"{existing['title']}\" → \"{park_data['title']}\"")
                    existing['title'] = park_data['title']
                parks.append(existing)
            else:
                parks.append(park_data)
    
    # Sort parks by title
    parks.sort(key=lambda x: x['title'])
    
    # Write output JSON
    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(parks, f, indent=2, ensure_ascii=False)
    
    print(f'\n✅ Success! Processed {len(parks)} parks')
    print(f'📝 Output written to: {OUTPUT_JSON}')
    print(f'\n📊 Summary:')
    for park in parks:
        hero_count = sum(1 for img in park['images'] if img['priority'] == 'hero')
        gallery_count = sum(1 for img in park['images'] if img['priority'] == 'gallery')
        print(f"  • {park['title']}: {len(park['images'])} images ({hero_count} hero, {gallery_count} gallery)")
    
    print(f'\n🎉 Done!')
    return 0

if __name__ == '__main__':
    exit(main())

