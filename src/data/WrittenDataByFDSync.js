'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is a string
class WrittenDataByFDSync extends AsyncObject {

  // params is [, position[, encoding]]
  constructor(fd, string, ...params) {
    super(fd, string, ...params);
  }

  definedSyncCall() {
    return (fd, string, ...params) => {
      return string;
    }
  }

}

module.exports = WrittenDataByFDSync;
