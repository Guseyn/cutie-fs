'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is boolean
// async variation of this object is not supported by cutie-fs
//  due to https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
class DoesFileExistSync extends AsyncObject {

  constructor(path) {
    super(path);
  }

  definedSyncCall() {
    return fs.existsSync;
  }

}

module.exports = DoesFileExistSync;
