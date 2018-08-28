'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is file
class WrittenFile extends AsyncObject {

  constructor(file, data, options) {
    super(file, data, options || {
      encoding: 'utf8',
      mode: 0o666,
      flag: 'w'
    });
  }

  definedAsyncCall() {
    return (file, data, options, callback) => {
      this.file = file;
      fs.writeFile(file, data, options, callback);
    }
  }

  onResult() {
    return this.file;
  }

}

module.exports = WrittenFile;
