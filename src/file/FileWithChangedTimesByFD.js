'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as fd)
class FileWithChangedTimesByFD extends AsyncObject {

  constructor(fd, atime, mtime) {
    super(fd, atime, mtime);
  }

  definedAsyncCall() {
    return (fd, atime, mtime, callback) => {
      this.file = fd;
      fs.futimes(fd, atime, mtime, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = FileWithChangedTimesByFD;
