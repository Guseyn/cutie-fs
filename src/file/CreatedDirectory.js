'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class CreatedDirectory extends AsyncObject {

  constructor(path, mode) {
    super(path, mode || 0o777);
  }

  definedAsyncCall() {
    return (path, mode, callback) => {
      this.file = path;
      fs.mkdir(path, mode, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = CreatedDirectory;
