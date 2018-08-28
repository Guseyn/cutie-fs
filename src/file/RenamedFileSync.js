'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as newPath)
class RenamedFileSync extends AsyncObject {

  constructor(oldPath, newPath) {
    super(oldPath, newPath);
  }

  definedSyncCall() {
    return (oldPath, newPath) => {
      fs.renameSync(oldPath, newPath);
      return newPath;
    }
  }

}

module.exports = RenamedFileSync;
