'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is a ReadStream
class ReadStreamWithOpenEvent extends AsyncObject {
  /*
    event is an Event with body(fd)
  */
  constructor (readStream, event) {
    super(readStream, event)
  }

  syncCall () {
    return (readStream, event) => {
      readStream.on('open', event)
      return readStream
    }
  }
}

module.exports = ReadStreamWithOpenEvent
