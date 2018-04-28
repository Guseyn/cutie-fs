'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer or string
class ReadBufferByPathSync extends AsyncObject {

  constructor(path, options) {
    super(path, options || {
      encoding: null,
      flag: 'r'
    });
  }

  definedSyncCall() {
    return fs.readFile;
  }

}

module.exports = ReadBufferByPathSync;
