'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;
const fs = require('fs');

// Represented result is FSWatcher
class WatcherWithChangeEvent extends AsyncObject {

  /*
    ...args are (,[options][,listener])
    listener is an Event with definedBody(eventType, fileName)
  */
  constructor(fileName, ...args) {
    super(fileName, ...args);
  }

  definedSyncCall() {
    return (fileName, ...args) => {
      return fs.watch(fileName, ...args);
    }
  }

}

module.exports = WatcherWithChangeEvent;
