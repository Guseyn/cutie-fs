'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path) that is accessible (if not then onError is being invoked)
class AccessibleFile extends AsyncObject {

  constructor(path, mode) {
    super(path, mode || fs.constants.F_OK);
  }

  definedAsyncCall() {
    return (path, mode, callback) => {
      this.file = path;
      fs.access(path, mode, callback);
    }
  }

  onResult() {
    return this.file;
  }

  onError(error) {
    console.log(`no access!`);
    return;
  }

}

module.exports = AccessibleFile;
