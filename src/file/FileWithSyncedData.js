'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fd)
class FileWithSyncedData extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedAsyncCall() {
    return (fd, callback) => {
      this.file = fd;
      fs.fdatasync(fd, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = FileWithSyncedData;
