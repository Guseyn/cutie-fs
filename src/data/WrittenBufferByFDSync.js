'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is buffer
class WrittenBufferByFDSync extends AsyncObject {

  // params are [, offset[, length[, position]]]
  constructor(fd, buffer, ...params) {
    super(fd, buffer, ...params);
  }

  definedSyncCall() {
    return (fd, buffer, ...params) => {
      fs.write(fd, buffer, ...params);
      return buffer;
    }
  }

}

module.exports = WrittenBufferByFDSync;
