'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as fd)
class FileWithChangedOwnerByFDSync extends AsyncObject {

  constructor(fd, uid, gid) {
    super(fd, uid, gid);
  }

  definedSyncCall() {
    return (fd, uid, gid) => {
      fs.fchown(fd, uid, gid);
      return fd;
    }
  }

}

module.exports = FileWithChangedOwnerByFDSync;
