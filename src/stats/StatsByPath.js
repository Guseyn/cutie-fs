'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is stats
class StatsByPath extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedAsyncCall() {
    return fs.stat;
  }

}

module.exports = StatsByPath;
