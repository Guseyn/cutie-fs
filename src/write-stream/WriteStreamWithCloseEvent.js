'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is a WriteStream
class WriteStreamWithCloseEvent extends AsyncObject {
  /*
    event is an Event with body()
  */
  constructor (writeStream, event) {
    super(writeStream, event)
  }

  syncCall () {
    return (writeStream, event) => {
      writeStream.on('close', event)
      return writeStream
    }
  }
}

module.exports = WriteStreamWithCloseEvent
