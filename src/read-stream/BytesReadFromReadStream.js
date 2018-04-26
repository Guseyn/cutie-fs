'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is the number of bytes read so far
class BytesReadFromReadStream extends AsyncObject {

  constructor(readStream) {
    super(readStream);
  }

  definedSyncCall() {
    return (readStream) => {
      return readStream.bytesRead;
    }
  }

}

module.exports = BytesReadFromReadStream;
