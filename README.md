# Stream with brotli in Node.js

<img src="https://i.ibb.co/qFfB5Gh/Untitled-Diagram.png" height="70" ></img>

## Getting Started

1. Clone this repository using HTTP:

   `git clone https://github.com/linoyzaga/streams-brotli-node.git`

2. Go to the repository library:
   `cd streams-brotli-node`

3. Un-comment the example you want to explore.

4. Strat the server

   `yarn start`

That's it, you are all set!

## Project Structure

Breaking down the basic structure and the configurations

```
src/
  data
    brotliCompressedData.txt.br // compressed file with brotli, just for example
    brotliDecompressedData.txt  // decompressed file with brotli, just for example
    readFileData.txt            // file to read from, just for example
    writeFileData.txt           // file to write to, just for example
  brotliStream.js               // exmaple how to write streams with brotli
  pipeStream.js                 // exmaple how to write streams with pipe
  readStream.js                 // exmaple how to write reable stream
  writeStream.js                // exmaple how to write writable stream
.gitignore                      // github's default node gitignore with customizations
index.js                        // server's strart point
package.json                    // common dev deps and workspace-wide scripts
README.md                       // workspace-wide information. shown in github
```

---

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/linoyzaga/streams-brotli-node)
