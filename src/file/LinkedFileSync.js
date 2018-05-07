'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as linkstring)
class LinkedFileSync extends AsyncObject {

  constructor(existingPath, newPath) {
    super(existingPath, newPath);
  }

  definedSyncCall() {
    return (existingPath, newPath) => {
      return fs.linkSync(existingPath, newPath);
    }
  }

}

module.exports = LinkedFileSync;
