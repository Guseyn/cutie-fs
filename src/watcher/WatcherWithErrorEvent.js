'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is FSWatcher
class WatcherWithErrorEvent extends AsyncObject {

  /*
    event is an Event with definedBody(error)
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
