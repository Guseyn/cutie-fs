'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

class RealPathSync extends AsyncObject {
  constructor (path, options) {
    super(path, options || 'utf8')
  }

  syncCall () {
    return fs.realpathSync
  }
}

module.exports = RealPathSync
