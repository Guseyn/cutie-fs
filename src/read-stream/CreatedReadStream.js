'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is ReadStream
class CreatedReadStream extends AsyncObject {

  constructor(path, options) {
    super(path, options || {
      flags: 'r',
      encoding: null,
      fd: null,
      mode: 0o666,
      autoClose: true,
      highWaterMark: 64 * 1024
    });
  }

  definedSyncCall() {
    return (path, options) => {
      return fs.createReadStream(path, options);
    }
  }

}

module.exports = CreatedReadStream;
