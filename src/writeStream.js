const fs = require("fs");

const FILE_NAME = 'src/data/writeFileData.txt'

const writeStreamHandler = () => {
  // Create write stream
  const writeStream = fs.createWriteStream(FILE_NAME);

  for (let i = 0; i < 10; i++) {
    // Handle 'write' event - write this line to the file
    writeStream.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit\n');
  }

  // Handle 'end' event - close the stream
  writeStream.end(() => {
    console.log('Done writing 😎')
  });
};

module.exports = {
  writeStreamHandler
};