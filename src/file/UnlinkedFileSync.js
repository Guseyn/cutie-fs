'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file (as path)
class UnlinkedFileSync extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedAsyncCall() {
    return (path) => {
      fs.unlinkSync(path);
      return path;
    }
  }

}

module.exports = UnlinkedFileSync;
