'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is FSWatcher
class WatcherWithErrorEvent extends AsyncObject {

  /*
    event is Event with definedBody(error)
  */
  constructor(watcher, event) {
    super(watcher, event);
  }

  definedSyncCall() {
    return (watcher, event) => {
      watcher.on('error', event);
      return watcher;
    }
  }

}

module.exports = WatcherWithErrorEvent;
