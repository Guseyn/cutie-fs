'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as folder from callback)
class CreatedTemporaryDirectorySync extends AsyncObject {

  constructor(prefix, options) {
    super(prefix, options || 'utf8');
  }

  definedSyncCall() {
    return fs.mkdtemp;
  }

}

module.exports = CreatedTemporaryDirectorySync;
