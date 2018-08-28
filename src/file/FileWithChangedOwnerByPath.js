'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path)
class FileWithChangedOwnerByPath extends AsyncObject {

  constructor(path, uid, gid) {
    super(path, uid, gid);
  }

  definedAsyncCall() {
    return (path, uid, gid, callback) => {
      this.file = path;
      fs.chown(path, uid, gid, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = FileWithChangedOwnerByPath;
