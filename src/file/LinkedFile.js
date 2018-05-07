'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as linkstring)
class LinkedFile extends AsyncObject {

  constructor(existingPath, newPath) {
    super(existingPath, newPath);
  }

  definedAsyncCall() {
    return (existingPath, newPath, callback) => {
      fs.link(existingPath, newPath, callback);
    }
  }

}

module.exports = LinkedFile;
