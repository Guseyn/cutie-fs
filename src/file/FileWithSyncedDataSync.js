'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fd)
class FileWithSyncedDataSync extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedSyncCall() {
    return (fd) => {
      fs.fdatasync(fd);
      return fd;
    }
  }

}

module.exports = FileWithSyncedDataSync;
