'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path)
class LinkedFileWithChangedPermissionsByPath extends AsyncObject {

  constructor(path, mode) {
    super(path, mode);
  }

  definedAsyncCall() {
    return (path, mode, callback) => {
      this.file = path;
      fs.lchmod(path, mode, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = LinkedFileWithChangedPermissionsByPath;
