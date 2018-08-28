'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path)
class FileWithChangedPermissionsByPathSync extends AsyncObject {

  constructor(path, mode) {
    super(path, mode);
  }

  definedSyncCall() {
    return (path, mode) => {
      fs.chmodSync(path, mode);
      return path;
    }
  }

}

module.exports = FileWithChangedPermissionsByPathSync;
