const fs = require('fs');

const READ_FILE_NAME = 'src/data/readFileData.txt'
const WRITE_FILE_NAME = 'src/data/writeFileData.txt'

const pipeStreamHandler = () => {
  // Create read and write streams
  const readStream = fs.createReadStream(READ_FILE_NAME);
  const writeStream = fs.createWriteStream(WRITE_FILE_NAME);

  // Pipe read and write operations together
  readStream.pipe(writeStream);

  console.log('Done piping 😎');
};

module.exports = {
  pipeStreamHandler
};