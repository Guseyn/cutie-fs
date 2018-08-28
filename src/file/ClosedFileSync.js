'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (fd)
class ClosedFileSync extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedSyncCall() {
    return (fd) => {
      fs.close(fd);
      return fd;
    }
  }

}

module.exports = ClosedFileSync;
