const fs = require("fs");

const FILE_NAME = 'src/data/readFileData.txt'
var data = '';

const readStreamHandler = () => {
  // Create read stream
  const readStream = fs.createReadStream(FILE_NAME);

  // Handle 'on' event - each chunk we read we save it to a variable
  readStream.on('data', (chunk) => {
    data += chunk;
  });

  // Handle 'end' event - close the stream and print it's content
  readStream.on('end', () => {
    console.log(data);
  });
}

module.exports = {
  readStreamHandler
};