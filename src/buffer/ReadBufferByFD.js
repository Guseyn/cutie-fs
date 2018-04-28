'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represents buffer
class ReadBufferByFD extends AsyncObject {

  constructor(fd, buffer, offset, length, position) {
    super(fd, buffer, offset, length, position);
  }

  definedAsyncCall() {
    return fs.read;
  }

  onResult(bytesRead, buffer) {
    return buffer;
  }

}

module.exports = ReadBufferByFD;
