'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is file[]
class ReadFilesOfDirectory extends AsyncObject {
  constructor (path, options) {
    super(path, options || 'utf8')
  }

  asyncCall () {
    return fs.readdir
  }
}

module.exports = ReadFilesOfDirectory
