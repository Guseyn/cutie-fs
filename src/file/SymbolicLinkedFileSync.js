'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class SymbolicLinkedFileSync extends AsyncObject {

  constructor(target, path, type) {
    super(target, path, type || 'file');
  }

  definedSyncCall() {
    return (target, path, type) => {
      fs.symlinkSync(target, path, type);
      return path;
    }
  }

}

module.exports = SymbolicLinkedFileSync;
