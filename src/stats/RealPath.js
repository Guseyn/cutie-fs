'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class RealPath extends AsyncObject {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedAsyncCall() {
    return fs.realPath;
  }

}

module.exports = RealPath;
