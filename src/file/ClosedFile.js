'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (fd)
class ClosedFile extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedAsyncCall() {
    return (fd, callback) => {
      this.file = fd;
      fs.close(fd, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = ClosedFile;
