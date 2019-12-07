const fs = require('fs');
const zlib = require('zlib');

const brotliStreamCompress = () => {
  const READ_FILE_NAME = 'src/data/readFileData.txt';
  const WRITE_FILE_NAME = 'src/data/brotliCompressedData.txt.br';

  // Create read and write streams
  const readStream = fs.createReadStream(READ_FILE_NAME);
  const writeStream = fs.createWriteStream(WRITE_FILE_NAME);

  // Create brotli compress stream
  const brotli = zlib.createBrotliCompress();

  // Pipe the read and write operations with brotli compression
  const stream = readStream.pipe(brotli).pipe(writeStream);

  stream.on('finish', () => {
    console.log('Done compressing 😎');
  });
};

const brotliStreamDecompress = () => {
  const READ_FILE_NAME = 'src/data/brotliCompressedData.txt.br';
  const WRITE_FILE_NAME = 'src/data/brotliDecompressedData.txt';

  // Create read and write streams
  const readStream = fs.createReadStream(READ_FILE_NAME);
  const writeStream = fs.createWriteStream(WRITE_FILE_NAME);

  // Create brotli compress stream
  const brotli = zlib.createBrotliDecompress();

  // Pipe the read and write operations with brotli compression
  const stream = readStream.pipe(brotli).pipe(writeStream);

  stream.on('finish', () => {
    console.log('Done decompressing 😎');
  });
};

module.exports = {
  brotliStreamCompress,
  brotliStreamDecompress
};