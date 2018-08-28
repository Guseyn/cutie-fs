'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is a WriteStream
class WriteStreamWithOpenEvent extends AsyncObject {

  /*
    event is an Event with definedBody(fd)
  */
  constructor(writeStream, event) {
    super(writeStream, event);
  }

  definedSyncCall() {
    return (writeStream, event) => {
      writeStream.on('open', event);
      return writeStream;
    }
  }

}

module.exports = WriteStreamWithOpenEvent;
