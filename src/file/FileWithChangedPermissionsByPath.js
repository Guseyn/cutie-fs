'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path)
class FileWithChangedPermissionsByPath extends AsyncObject {

  constructor(path, mode) {
    super(path, mode);
  }

  definedAsyncCall() {
    return (path, mode, callback) => {
      this.file = path;
      fs.chmod(path, mode, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = FileWithChangedPermissionsByPath;
