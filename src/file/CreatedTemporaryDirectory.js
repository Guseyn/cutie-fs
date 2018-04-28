'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as folder from callback)
class CreatedTemporaryDirectory extends AsyncObject {

  constructor(prefix, options) {
    super(prefix, options || 'utf8');
  }

  definedAsyncCall() {
    return fs.mkdtemp;
  }

}

module.exports = CreatedTemporaryDirectory;
