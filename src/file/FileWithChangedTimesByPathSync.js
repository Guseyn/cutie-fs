'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as path)
class FileWithChangedTimesByPathSync extends AsyncObject {

  constructor(path, atime, mtime) {
    super(path, atime, mtime);
  }

  definedSyncCall() {
    return (path, atime, mtime) => {
      fs.utimesSync(path, atime, mtime);
      return path;
    }
  }

}

module.exports = FileWithChangedTimesByPathSync;
