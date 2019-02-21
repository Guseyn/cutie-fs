'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is stats
class LinkedStatsSync extends AsyncObject {
  constructor (path) {
    super(path)
  }

  syncCall () {
    return fs.lstatSync
  }
}

module.exports = LinkedStatsSync
