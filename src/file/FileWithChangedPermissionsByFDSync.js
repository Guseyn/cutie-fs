'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as fd)
class FileWithChangedPermissionsByFDSync extends AsyncObject {

  constructor(fd, mode) {
    super(fd, mode);
  }

  definedSyncCall() {
    return (fd, mode, callback) => {
      fs.fchmod(fd, mode, callback);
      return fd;
    }
  }

}

module.exports = FileWithChangedPermissionsByFDSync;
