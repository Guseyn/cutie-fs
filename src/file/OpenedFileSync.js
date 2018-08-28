'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as fd from callback)
class OpenedFileSync extends AsyncObject {

  constructor(path, flags, mode) {
    super(path, flags, mode || 0o666);
  }

  definedSyncCall() {
    return fs.openSync;
  }

}

module.exports = OpenedFileSync;
