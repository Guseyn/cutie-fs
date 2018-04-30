'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is buffer
class WrittenBufferByFDSync extends AsyncObject {

  // params is [, offset[, length[, position]]]
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
