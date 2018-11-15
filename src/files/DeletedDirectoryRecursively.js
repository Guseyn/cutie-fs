'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const deletedDirectoryRecursively = require('./../custom-calls/deletedDirectoryRecursively');

// Represented result is dir
class DeletedDirectoryRecursively extends AsyncObject {

  constructor(dir, options) {
    super(dir, options || 'utf8');
  }

  definedAsyncCall() {
    return deletedDirectoryRecursively;
  }

}

module.exports = DeletedDirectoryRecursively;
