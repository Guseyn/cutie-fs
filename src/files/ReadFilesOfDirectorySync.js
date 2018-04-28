'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file[]
class ReadFilesOfDirectorySync {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedSyncCall() {
    return fs.readdir;
  }

}

module.exports = ReadFilesOfDirectorySync;
