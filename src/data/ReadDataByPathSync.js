'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is buffer or string
class ReadBufferByPathSync extends AsyncObject {

  constructor(path, options) {
    super(path, options || {
      encoding: null,
      flag: 'r'
    });
  }

  definedSyncCall() {
    return fs.readFileSync;
  }

}

module.exports = ReadBufferByPathSync;
