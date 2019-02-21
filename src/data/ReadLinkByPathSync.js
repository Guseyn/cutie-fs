'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is linkstring
class ReadLinkByPathSync extends AsyncObject {
  constructor (path, options) {
    super(path, options || 'utf8')
  }

  syncCall () {
    return fs.readlinkSync
  }
}

module.exports = ReadLinkByPathSync
