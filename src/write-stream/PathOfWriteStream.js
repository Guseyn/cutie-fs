'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

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
