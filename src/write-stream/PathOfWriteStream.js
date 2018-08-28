'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is the path to the file the stream is writing
class PathOfWriteStream extends AsyncObject {

  constructor(writeStream) {
    super(writeStream);
  }

  definedSyncCall() {
    return (writeStream) => {
      return writeStream.path;
    }
  }

}

module.exports = PathOfWriteStream;
