'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const readDataFromFiles = require('./../custom-calls/readDataFromFiles');

// Represented result is object: {fileName1: data1, fileName2: data2, ... } 
class ReadDataFromFiles extends AsyncObject {

  constructor(files, options) {
    super(files, options || {
      encoding: null,
      flag: 'r'
    });
  }

  definedAsyncCall() {
    return readDataFromFiles;
  }

}

module.exports = ReadDataFromFiles;
