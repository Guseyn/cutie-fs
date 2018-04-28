'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path)
class LinkedFileWithChangedPermissionsByPathSync extends AsyncObject {

  constructor(path, mode) {
    super(path, mode);
  }

  definedSyncCall() {
    return (path, mode) => {
      fs.lchmod(path, mode);
      return path;
    }
  }

}

module.exports = LinkedFileWithChangedPermissionsByPathSync;
