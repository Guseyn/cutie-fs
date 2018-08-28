'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file[]
class ReadFilesOfDirectorySync extends AsyncObject {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedSyncCall() {
    return fs.readdirSync;
  }

}

module.exports = ReadFilesOfDirectorySync;
