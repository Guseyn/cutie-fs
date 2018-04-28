'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is stats
class StatsByFDSync extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedSyncCall() {
    return fs.fstat;
  }

}

module.exports = StatsByFDSync;
