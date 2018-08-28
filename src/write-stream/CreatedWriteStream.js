'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is WriteStream
class CreatedWriteStream extends AsyncObject {

  constructor(path, options) {
    super(path, options || {
      flags: 'w',
      encoding: 'utf8',
      fd: null,
      mode: 0o666,
      autoClose: true
    });
  }

  definedSyncCall() {
    return (path, options) => {
      return fs.createWriteStream(path, options);
    }
  }

}

module.exports = CreatedWriteStream;
