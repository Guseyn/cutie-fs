'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is FSWatcher
class WatcherWithEventTypeAndFilenameListener extends AsyncObject {

  /*
    listener is an Event with definedBody(eventType, filename)
  */
  constructor(filename, options, listener) {
    super(filename, options || {
      persistent: true,
      recursive: false,
      encoding: 'utf8'
    }, listener || undefined);
  }

  definedSyncCall() {
    return (filename, options, listener) => {
      return fs.watch(filename, options, listener);
    }
  }

}

module.exports = WatcherWithEventTypeAndFilenameListener;
