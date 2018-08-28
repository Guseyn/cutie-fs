'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as newPath)
class RenamedFile extends AsyncObject {

  constructor(oldPath, newPath) {
    super(oldPath, newPath);
  }

  definedAsyncCall() {
    return (oldPath, newPath, callback) => {
      this.file = newPath;
      fs.rename(oldPath, newPath, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = RenamedFile;
