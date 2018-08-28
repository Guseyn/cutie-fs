'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class DeletedDirectorySync extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedSyncCall() {
    return (path) => {
      fs.rmdirSync(path);
      return path;
    }
  }

}

module.exports = DeletedDirectorySync;
