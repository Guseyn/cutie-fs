'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const readFilesOfDirectoryRecursively = require('./../custom-calls/readFilesOfDirectoryRecursively');

// Represented result is file[]
class ReadFilesOfDirectory extends AsyncObject {

  constructor(dir, options) {
    super(dir, options || 'utf8');
  }

  definedAsyncCall() {
    return readFilesOfDirectoryRecursively;
  }

  onResult(files) {
    console.log(files.length);
  }

}

new ReadFilesOfDirectory('./src').call();

module.exports = ReadFilesOfDirectory;
