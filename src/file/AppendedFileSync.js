'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (represented result of the first passed argument)
class AppendedFileSync extends AsyncObject {

  constructor(file, data, options) {
    super(file, data, options || {
      encoding: 'utf8',
      mode: 0o666,
      flag: 'a'
    });
  }

  definedSyncCall() {
    return (file, data, options) => {
      fs.appendFile(file, data, options);
      return file;
    }
  }

}

module.exports = AppendedFileSync;
