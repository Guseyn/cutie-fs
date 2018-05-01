'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is a string
class WrittenDataByFD extends AsyncObject {

  // params is [, position[, encoding]]
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
