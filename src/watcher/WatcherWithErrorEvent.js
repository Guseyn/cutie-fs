'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is FSWatcher
class WatcherWithErrorEvent extends AsyncObject {
  /*
    event is an Event with body(error)
  */
  constructor (watcher, event) {
    super(watcher, event)
  }

  syncCall () {
    return (watcher, event) => {
      watcher.on('error', event)
      return watcher
    }
  }
}

module.exports = WatcherWithErrorEvent
