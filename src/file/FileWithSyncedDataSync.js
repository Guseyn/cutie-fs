'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fd)
class FileWithSyncedDataSync extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedSyncCall() {
    return (fd) => {
      fs.fdatasyncSync(fd);
      return fd;
    }
  }

}

module.exports = FileWithSyncedDataSync;
