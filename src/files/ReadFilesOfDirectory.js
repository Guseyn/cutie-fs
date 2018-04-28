'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file[]
class ReadFilesOfDirectory {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedAsyncCall() {
    return fs.readdir;
  }

}

module.exports = ReadFilesOfDirectory;
