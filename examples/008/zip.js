const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

const ZLIB_BEST_COMPRESSION = 9;
const zipPath = path.join(__dirname, 'files.zip');
const ouput = fs.createWriteStream(zipPath);

const archive = archiver('zip', {
  zlib: { level: ZLIB_BEST_COMPRESSION }
});

ouput.on('close', () => {
  console.log(`Total bytes: ${archive.pointer()}`);
  console.log('archiving has now finished.');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(ouput);
const textPath = path.join(__dirname, 'copy.txt');
const logoPath = path.join(__dirname, 'logo.jpg');

archive.append(fs.createReadStream(textPath), { name: 'content.txt' });
archive.append(fs.createReadStream(logoPath), { name: 'nobot.jpg' });

archive.finalize();
