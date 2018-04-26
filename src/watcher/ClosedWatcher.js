'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is FSWatcher
class ClosedWatcher extends AsyncObject {

  constructor(watcher) {
    super(watcher);
  }

  definedSyncCall() {
    return (watcher) => {
      watcher.close();
      return watcher;
    }
  }

}

module.exports = ClosedWatcher;
