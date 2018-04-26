'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is a ReadStream
class ClosedReadStream extends AsyncObject {

  constructor(readStream) {
    super(readStream);
  }

  definedSyncCall() {
    return (readStream) => {
      readStream.close();
      return readStream;
    }
  }

}

module.exports = ClosedReadStream;
