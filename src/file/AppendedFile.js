'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a file (represented result of the first passed argument)
class AppendedFile extends AsyncObject {

  constructor(file, data, options) {
    super(file, data, options || {
      encoding: 'utf8',
      mode: 0o666,
      flag: 'a'
    });
  }

  definedAsyncCall() {
    return (file, data, options, callback) => {
      this.file = file;
      fs.appendFile(file, data, options, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = AppendedFile;
