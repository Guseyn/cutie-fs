'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path)
class LinkedFileWithChangedPermissionsByPathSync extends AsyncObject {

  constructor(path, mode) {
    super(path, mode);
  }

  definedSyncCall() {
    return (path, mode) => {
      fs.lchmodSync(path, mode);
      return path;
    }
  }

}

module.exports = LinkedFileWithChangedPermissionsByPathSync;
