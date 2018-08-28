'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a string
class WrittenDataByFD extends AsyncObject {

  // params are [, position[, encoding]]
  constructor(fd, string, ...params) {
    super(fd, string, ...params);
  }

  definedAsyncCall() {
    return fs.write;
  }

  onResult(written, string) {
    return string;
  }

}

module.exports = WrittenDataByFD;
