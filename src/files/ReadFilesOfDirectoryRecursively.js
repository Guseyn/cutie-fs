'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const readFilesOfDirectoryRecursively = require('./../custom-calls/readFilesOfDirectoryRecursively');

// Represented result is file[]
class ReadFilesOfDirectoryRecursively extends AsyncObject {

  constructor(dir, options) {
    super(dir, options || 'utf8');
  }

  definedAsyncCall() {
    return readFilesOfDirectoryRecursively;
  }

}

module.exports = ReadFilesOfDirectoryRecursively;
