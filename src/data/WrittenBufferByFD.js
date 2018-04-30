'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class WrittenBufferByFD extends AsyncObject {

  // params is [, offset[, length[, position]]]
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
