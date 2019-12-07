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

// Uncomment line 28 for read stream example
// readStreamHandler();

// Uncomment line 31 for write stream example
// writeStreamHandler();

// Uncomment line 33 for pipe stream example
// pipeStreamHandler();