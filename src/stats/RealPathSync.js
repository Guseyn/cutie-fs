'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class RealPathSync extends AsyncObject {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedSyncCall() {
    return fs.realPath;
  }

}

module.exports = RealPathSync;
