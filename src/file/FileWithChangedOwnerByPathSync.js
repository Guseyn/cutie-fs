'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path)
class FileWithChangedOwnerByPathSync extends AsyncObject {

  constructor(path, uid, gid) {
    super(path, uid, gid);
  }

  definedSyncCall() {
    return (path, uid, gid) => {
      fs.chown(path, uid, gid);
      return path;
    }
  }

}

module.exports = FileWithChangedOwnerByPathSync;
