'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is linkstring
class ReadLinkByPath extends AsyncObject {
  constructor (path, options) {
    super(path, options || 'utf8')
  }

  asyncCall () {
    return fs.readlink
  }
}

module.exports = ReadLinkByPath
