'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fd)
class TruncatedFileByFDSync extends AsyncObject {

  constructor(fd, len) {
    super(fd, len || 0);
  }

  definedSyncCall() {
    return (fd, len) => {
      fs.ftruncate(fd, len);
      return fd;
    }
  }

}

module.exports = TruncatedFileByFDSync;