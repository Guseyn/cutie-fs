'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is stats
class StatsByFD extends AsyncObject {
  constructor (fd) {
    super(fd)
  }

  asyncCall () {
    return fs.fstat
  }
}

module.exports = StatsByFD
