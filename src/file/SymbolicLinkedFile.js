'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class SymbolicLinkedFile extends AsyncObject {

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

module.exports = SymbolicLinkedFile;
