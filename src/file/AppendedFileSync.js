'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
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
      fs.appendFileSync(file, data, options);
      return file;
    }
  }

}

module.exports = AppendedFileSync;
