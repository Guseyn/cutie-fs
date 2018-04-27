'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path) that is accessible (if not then onError is being invoked)
class AccessibleFileSync extends AsyncObject {

  constructor(path, mode) {
    super(path, mode || fs.constants.F_OK);
  }

  definedSyncCall() {
    return (path, mode) => {
      fs.access(path, mode);
      return path;
    }
  }

  onError(error) {
    console.log(`no access!`);
    return;
  }

}

module.exports = AccessibleFileSync;
