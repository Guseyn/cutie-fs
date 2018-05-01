'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is buffer or string
class ReadLinkDataByPath extends AsyncObject {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedAsyncCall() {
    return fs.readlink;
  }

}

module.exports = ReadLinkDataByPath;
