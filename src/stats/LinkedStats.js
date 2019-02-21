'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is stats
class LinkedStats extends AsyncObject {
  constructor (path) {
    super(path)
  }

  asyncCall () {
    return fs.lstat
  }
}

module.exports = LinkedStats
