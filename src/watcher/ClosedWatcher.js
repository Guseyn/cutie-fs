'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is a FSWatcher
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
