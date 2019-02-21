'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is stats
class StatsByPathSync extends AsyncObject {
  constructor (path) {
    super(path)
  }

  syncCall () {
    return fs.statSync
  }
}

module.exports = StatsByPathSync
