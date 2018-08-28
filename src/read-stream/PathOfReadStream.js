'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is the path to the file the stream is reading
class PathOfReadStream extends AsyncObject {

  constructor(readStream) {
    super(readStream);
  }

  definedSyncCall() {
    return (readStream) => {
      return readStream.path;
    }
  }

}

module.exports = PathOfReadStream;
