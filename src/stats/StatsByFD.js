'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is stats
class StatsByFD extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedAsyncCall() {
    return fs.fstat;
  }

}

module.exports = StatsByFD;
