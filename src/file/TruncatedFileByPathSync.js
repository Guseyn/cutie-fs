'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class TruncatedFileByPathSync extends AsyncObject {

  constructor(path, len) {
    super(path, len || 0);
  }

  definedSyncCall() {
    return (path, len) => {
      fs.truncateSync(path, len);
      return path;
    }
  }

}

module.exports = TruncatedFileByPathSync;
