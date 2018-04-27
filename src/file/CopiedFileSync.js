'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (represented result of dest)
class CopiedFileSync extends AsyncObject {

  constructor(src, dest, flags) {
    super(src, dest, flags || 0);
  }

  definedSyncCall() {
    return (src, dest, flags) => {
      fs.copyFile(src, dest, flags);
      return dest;
    }
  }

}

module.exports = CopiedFileSync;
