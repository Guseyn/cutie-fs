'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as fd)
class FileWithChangedOwnerByFD extends AsyncObject {

  constructor(fd, uid, gid) {
    super(fd, uid, gid);
  }

  definedAsyncCall() {
    return (fd, uid, gid, callback) => {
      this.file = fd;
      fs.fchown(fd, uid, gid, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = FileWithChangedOwnerByFD;
