'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

class RealPathSync extends AsyncObject {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedSyncCall() {
    return fs.realpathSync;
  }

}

module.exports = RealPathSync;
