'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is a string
class WrittenDataByFDSync extends AsyncObject {
  // params are [, position[, encoding]]
  constructor (fd, string, ...params) {
    super(fd, string, ...params)
  }

  syncCall () {
    return (fd, string, ...params) => {
      return string
    }
  }
}

module.exports = WrittenDataByFDSync
