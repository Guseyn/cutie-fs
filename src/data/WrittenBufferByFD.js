'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is buffer
class WrittenBufferByFD extends AsyncObject {

  // params are [, offset[, length[, position]]]
  constructor(fd, buffer, ...params) {
    super(fd, buffer, ...params);
  }

  definedAsyncCall() {
    return fs.write;
  }

  onResult(bytesWritten, buffer) {
    return buffer;
  }

}

module.exports = WrittenBufferByFD;
