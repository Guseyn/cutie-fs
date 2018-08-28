'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fd)
class SyncedFileSync extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedSyncCall() {
    return (fd) => {
      fs.fsyncSync(fd);
      return fd;
    }
  }

}

module.exports = SyncedFileSync;
