'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as fd)
class FileWithChangedPermissionsByFDSync extends AsyncObject {

  constructor(fd, mode) {
    super(fd, mode);
  }

  definedSyncCall() {
    return (fd, mode, callback) => {
      fs.fchmodSync(fd, mode, callback);
      return fd;
    }
  }

}

module.exports = FileWithChangedPermissionsByFDSync;
