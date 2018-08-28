'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as fd)
class FileWithChangedPermissionsByFD extends AsyncObject {

  constructor(fd, mode) {
    super(fd, mode);
  }

  definedAsyncCall() {
    return (fd, mode, callback) => {
      this.file = fd;
      fs.fchmod(fd, mode, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = FileWithChangedPermissionsByFD;
