'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (as fd)
class FileWithChangedOwnerByFDSync extends AsyncObject {

  constructor(fd, uid, gid) {
    super(fd, uid, gid);
  }

  definedSyncCall() {
    return (fd, uid, gid) => {
      fs.fchownSync(fd, uid, gid);
      return fd;
    }
  }

}

module.exports = FileWithChangedOwnerByFDSync;
