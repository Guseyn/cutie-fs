'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const writtenDataToFiles = require('./../custom-calls/writtenDataToFiles')

// Represented result is object: {fileName1: data1, fileName2: data2, ... }
class WrittenDataToFiles extends AsyncObject {
  constructor (filesWithData, options) {
    super(filesWithData, options || {
      encoding: null,
      flag: 'r'
    })
  }

  asyncCall () {
    return writtenDataToFiles
  }
}

module.exports = WrittenDataToFiles
