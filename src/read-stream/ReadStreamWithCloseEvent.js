'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is a ReadStream
class ReadStreamWithCloseEvent extends AsyncObject {
  /*
    event is an Event with body()
  */
  constructor (readStream, event) {
    super(readStream, event)
  }

  syncCall () {
    return (readStream, event) => {
      readStream.on('close', event)
      return readStream
    }
  }
}

module.exports = ReadStreamWithCloseEvent
