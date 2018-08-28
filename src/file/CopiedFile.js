'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (represented result of dest)
class CopiedFile extends AsyncObject {

  constructor(src, dest, flags) {
    super(src, dest, flags || 0);
  }

  definedAsyncCall() {
    return (src, dest, flags, callback) => {
      this.file = dest;
      fs.copyFile(src, dest, flags, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = CopiedFile;
