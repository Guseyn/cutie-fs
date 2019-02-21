'use strict'

const {
  as, Event
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  ListenerCount
} = require('@cuties/event')
const {
  WatcherWithEventTypeAndFilenameListener,
  WatcherWithErrorEvent,
  ClosedWatcher
} = require('./../../index')

const file = './test/watcher/files/test-3.txt'

class WatchListener extends Event {
  constructor () {
    super()
  }

  body (eventType, fileName) {}
}

class ErrorEvent extends Event {
  constructor () {
    super()
  }

  body (/* error */) {}
}

new StrictEqualAssertion(
  new ListenerCount(
    new WatcherWithErrorEvent(
      new WatcherWithEventTypeAndFilenameListener(
        file, new WatchListener()
      ).as('watcher'), new ErrorEvent()
    ), 'error'
  ), 1
).after(
  new ClosedWatcher(as('watcher'))
).call()
