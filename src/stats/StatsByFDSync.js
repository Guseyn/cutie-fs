'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is stats
class StatsByFDSync extends AsyncObject {

  constructor(fd) {
    super(fd);
  }

  definedSyncCall() {
    return fs.fstatSync;
  }

}

module.exports = StatsByFDSync;
