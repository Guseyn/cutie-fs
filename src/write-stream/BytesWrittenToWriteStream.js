'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is the number of bytes written so far
class BytesWrittenToWriteStream extends AsyncObject {

  constructor(writeStream) {
    super(writeStream);
  }

  definedSyncCall() {
    return (writeStream) => {
      return writeStream.bytesWritten;
    }
  }

}

module.exports = BytesWrittenToWriteStream;
