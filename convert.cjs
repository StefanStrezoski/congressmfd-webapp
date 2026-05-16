const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Path to your assets folder
const assetsDir = path.join(__dirname, 'src', 'assets');

// Read all files in the assets folder
fs.readdir(assetsDir, (err, files) => {
  if (err) {
    return console.error('Could not open assets folder:', err);
  }

  let count = 0;

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();

    // Target jpg, jpeg, and png
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const filePath = path.join(assetsDir, file);
      const newFileName = path.basename(file, ext) + '.webp';
      const outputPath = path.join(assetsDir, newFileName);

      sharp(filePath)
        .webp({ quality: 80 }) // 80 quality keeps images crisp but drops file size drastically
        .toFile(outputPath)
        .then(() => {
          console.log(`✅ Converted: ${file} -> ${newFileName}`);
        })
        .catch(err => console.error(`❌ Error converting ${file}:`, err));

      count++;
    }
  });

  if (count === 0) {
    console.log('No .jpg, .jpeg, or .png images found in the assets folder.');
  }
});
