'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file
class WrittenFileSync extends AsyncObject {

  constructor(file, data, options) {
    super(file, data, options || {
      encoding: 'utf8',
      mode: 0o666,
      flag: 'w'
    });
  }

  definedSyncCall() {
    return (file, data, options) => {
      fs.writeFileSync(file, data, options);
      return file;
    }
  }

}

module.exports = WrittenFileSync;
