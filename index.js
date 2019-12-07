const http = require("http");
const {
  readStreamHandler
} = require('./src/readStream');
const {
  writeStreamHandler
} = require('./src/writeStream');
const {
  pipeStreamHandler
} = require('./src/pipeStream');
const {
  brotliStreamCompress,
  brotliStreamDecompress
} = require('./src/brotliStream');

const PORT = 3000;

const requestHandler = (req, res) => {
  res.end("Node.js basic server");
};

const server = http.createServer(requestHandler);

server.listen(PORT, err => {
  if (err) {
    return console.log("Something went wrong", err);
  }

  console.log(`Server is listening on ${PORT} 🐷`);
});

// Uncomment line 33 for read stream example
// readStreamHandler();

// Uncomment line 36 for write stream example
// writeStreamHandler();

// Uncomment line 39 for pipe stream example
// pipeStreamHandler();

// Uncomment line 42 for brotli stream example
// brotliStreamCompress();

// Uncomment line 45 for brotli stream example
// brotliStreamDecompress();