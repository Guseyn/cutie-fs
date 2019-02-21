'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is buffer
class ReadBufferByFDSync extends AsyncObject {
  constructor (fd, buffer, offset, length, position) {
    super(fd, buffer, offset, length, position)
  }

  syncCall () {
    return (fd, buffer, offset, length, position) => {
      fs.readSync(fd, buffer, offset, length, position)
      return buffer
    }
  }
}

module.exports = ReadBufferByFDSync
