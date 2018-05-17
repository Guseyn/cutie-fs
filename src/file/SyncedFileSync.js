'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fd)
class SyncedFileSync extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedSyncCall() {
    return (fd) => {
      fs.fsyncSync(fd, callback);
      return fd;
    }
  }

}

module.exports = SyncedFileSync;
