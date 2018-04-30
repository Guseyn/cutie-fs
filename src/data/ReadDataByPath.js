'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer or string
class ReadDataByPath extends AsyncObject {

  constructor(path, options) {
    super(path, options || {
      encoding: null,
      flag: 'r'
    });
  }

  definedAsyncCall() {
    return fs.readFile;
  }

}

module.exports = ReadDataByPath;
