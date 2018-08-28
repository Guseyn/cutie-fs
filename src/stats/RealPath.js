'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

class RealPath extends AsyncObject {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedAsyncCall() {
    return fs.realpath;
  }

}

module.exports = RealPath;
