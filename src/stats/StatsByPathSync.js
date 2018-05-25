'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is stats
class StatsByPathSync extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedSyncCall() {
    return fs.statSync;
  }

}

module.exports = StatsByPathSync;
