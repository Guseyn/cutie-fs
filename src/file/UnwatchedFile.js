'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fileName)
class UnwatchedFile extends AsyncObject {

  constructor(fileName, listener) {
    super(fileName, listener);
  }

  definedSyncCall() {
    return (fileName, listener) => {
      this.file = fileName;
      fs.unwatchFile(fileName, listener);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = UnwatchedFile;
