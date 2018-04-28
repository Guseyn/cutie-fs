'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer or string
class ReadLinkDataByPathSync extends AsyncObject {

  constructor(path, options) {
    super(path, options || 'utf8');
  }

  definedSyncCall() {
    return fs.readlinkSync;
  }

}

module.exports = ReadLinkDataByPathSync;
