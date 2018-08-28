'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as fd)
class FileWithChangedTimesByFDSync extends AsyncObject {

  constructor(fd, atime, mtime) {
    super(fd, atime, mtime);
  }

  definedSyncCall() {
    return (fd, atime, mtime) => {
      fs.futimesSync(fd, atime, mtime);
      return fd;
    }
  }

}

module.exports = FileWithChangedTimesByFDSync;
