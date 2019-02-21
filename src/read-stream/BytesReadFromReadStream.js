'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is the number of bytes read so far
class BytesReadFromReadStream extends AsyncObject {
  constructor (readStream) {
    super(readStream)
  }

  syncCall () {
    return (readStream) => {
      return readStream.bytesRead
    }
  }
}

module.exports = BytesReadFromReadStream
