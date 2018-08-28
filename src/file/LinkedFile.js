'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as newpath)
class LinkedFile extends AsyncObject {

  constructor(existingPath, newPath) {
    super(existingPath, newPath);
  }

  definedAsyncCall() {
    return (existingPath, newPath, callback) => {
      this.file = newPath;
      fs.link(existingPath, newPath, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = LinkedFile;
