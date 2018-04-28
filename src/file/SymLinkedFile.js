'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class SymLinkedFile extends AsyncObject {

  constructor(target, path, type) {
    super(target, path, type || 'file');
  }

  definedAsyncCall() {
    return (target, path, type, callback) => {
      this.file = path;
      fs.symlink(target, path, type, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = SymLinkedFile;
