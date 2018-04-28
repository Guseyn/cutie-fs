'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class TruncatedFileByPath extends AsyncObject {

  constructor(path, len) {
    super(path, len || 0);
  }

  definedAsyncCall() {
    return (path, len, callback) => {
      this.file = path;
      fs.truncate(path, len, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = TruncatedFileByPath;
