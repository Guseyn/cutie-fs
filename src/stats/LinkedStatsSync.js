'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is stats
class LinkedStatsSync extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedSyncCall() {
    return fs.lstatSync;
  }

}

module.exports = LinkedStatsSync;
