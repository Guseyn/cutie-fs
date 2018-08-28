'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class CreatedDirectorySync extends AsyncObject {

  constructor(path, mode) {
    super(path, mode || 0o777);
  }

  definedSyncCall() {
    return (path, mode) => {
      fs.mkdirSync(path, mode);
      return path;
    }
  }

}

module.exports = CreatedDirectorySync;
