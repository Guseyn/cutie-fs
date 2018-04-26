'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is a ReadStream
class ReadStreamWithCloseEvent extends AsyncObject {

  /*
    event is an Event with definedBody()
  */
  constructor(readStream, event) {
    super(readStream, event);
  }

  definedSyncCall() {
    return (readStream, event) => {
      readStream.on('close', event);
      return readStream;
    }
  }

}

module.exports = ReadStreamWithCloseEvent;
