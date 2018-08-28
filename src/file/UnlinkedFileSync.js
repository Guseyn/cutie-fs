'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class UnlinkedFileSync extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedSyncCall() {
    return (path) => {
      fs.unlinkSync(path);
      return path;
    }
  }

}

module.exports = UnlinkedFileSync;
