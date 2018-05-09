'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is linkstring
class ReadLinkByPath extends AsyncObject {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedAsyncCall() {
    return fs.readlink;
  }
  
}

module.exports = ReadLinkByPath;
