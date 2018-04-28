'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class SymLinkedFileSync extends AsyncObject {

  constructor(target, path, type) {
    super(target, path, type || 'file');
  }

  definedSyncCall() {
    return (target, path, type) => {
      fs.symlink(target, path, type);
      return path;
    }
  }

}

module.exports = SymLinkedFileSync;
