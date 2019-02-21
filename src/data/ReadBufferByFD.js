'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is buffer
class ReadBufferByFD extends AsyncObject {
  constructor (fd, buffer, offset, length, position) {
    super(fd, buffer, offset, length, position)
  }

  asyncCall () {
    return fs.read
  }

  onResult (bytesRead, buffer) {
    return buffer
  }
}

module.exports = ReadBufferByFD
