'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class UnlinkedFile extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedAsyncCall() {
    return (path, callback) => {
      this.file = path;
      fs.unlink(path, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = UnlinkedFile;
