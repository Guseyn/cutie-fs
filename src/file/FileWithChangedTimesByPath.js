'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path)
class FileWithChangedTimesByPath extends AsyncObject {

  constructor(path, atime, mtime) {
    super(path, atime, mtime);
  }

  definedAsyncCall() {
    return (path, atime, mtime, callback) => {
      this.file = path;
      fs.utimes(path, atime, mtime, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = FileWithChangedTimesByPath;
