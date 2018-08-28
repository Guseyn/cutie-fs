'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fd)
class TruncatedFileByFD extends AsyncObject {

  constructor(fd, len) {
    super(fd, len || 0);
  }

  definedAsyncCall() {
    return (fd, len, callback) => {
      this.file = fd;
      fs.ftruncate(fd, len, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = TruncatedFileByFD;
