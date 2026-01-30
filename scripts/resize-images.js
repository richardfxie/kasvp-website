const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Team photos to resize
const teamPhotos = [
  'julian-handel',
  'kevin-ulrich',
  'lucas-lorentz',
  'richard-xie'
];

// Target widths for srcset
const sizes = [450, 900, 1350];

// Output aspect ratio (3:4 portrait)
const aspectRatio = 3 / 4;

async function resizeImage(name) {
  const inputPath = path.join(__dirname, '..', 'images', `${name}.webp`);

  // Check if source exists
  if (!fs.existsSync(inputPath)) {
    console.log(`Skipping ${name}: source file not found`);
    return;
  }

  console.log(`Processing ${name}...`);

  for (const width of sizes) {
    const height = Math.round(width / aspectRatio);
    const outputPath = path.join(__dirname, '..', 'images', `${name}-${width}w.webp`);

    await sharp(inputPath)
      .resize(width, height, {
        fit: 'cover',
        position: 'top', // Focus on face/top of photo
        kernel: 'lanczos3' // High-quality downsampling to reduce moire
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log(`  Created ${name}-${width}w.webp (${width}x${height})`);
  }
}

async function main() {
  console.log('Generating responsive team photos...\n');

  for (const photo of teamPhotos) {
    await resizeImage(photo);
  }

  console.log('\nDone!');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
