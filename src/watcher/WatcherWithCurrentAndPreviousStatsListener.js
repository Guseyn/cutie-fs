'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;
const fs = require('fs');

// Represented result is FSWatcher
class WatcherWithCurrentAndPreviousStatsListener extends AsyncObject {

  /*
    listener is an Event with definedBody(current, previous),
    current and previous have Stats type
  */
  constructor(filename, options, listener) {
    super(filename, options || {
      persistent: true,
      interval: 5007
    }, listener);
  }

  definedSyncCall() {
    return (filename, options, listener) => {
      return fs.watchFile(filename, options, listener);
    }
  }

}

module.exports = WatcherWithCurrentAndPreviousStatsListener;
