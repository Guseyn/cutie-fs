'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fileName)
class UnwatchedFile extends AsyncObject {

  constructor(fileName) {
    super(fileName);
  }

  definedAsyncCall() {
    return (fileName, callback) => {
      this.file = fileName;
      fs.unwatch(path, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = UnwatchedFile;
