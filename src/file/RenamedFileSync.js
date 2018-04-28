'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as newPath)
class RenamedFileSync extends AsyncObject {

  constructor(oldPath, newPath) {
    super(oldPath, newPath);
  }

  definedSyncCall() {
    return (oldPath, newPath) => {
      fs.rename(oldPath, newPath);
      return newPath;
    }
  }

}

module.exports = RenamedFileSync;
