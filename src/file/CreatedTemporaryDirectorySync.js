'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as folder from callback)
class CreatedTemporaryDirectorySync extends AsyncObject {

  constructor(prefix, options) {
    super(prefix, options || 'utf8');
  }

  definedSyncCall() {
    return fs.mkdtempSync;
  }

}

module.exports = CreatedTemporaryDirectorySync;
