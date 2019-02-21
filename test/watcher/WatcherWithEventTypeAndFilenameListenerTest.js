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
  ClosedWatcher
} = require('./../../index')

const file = './test/watcher/files/test-4.txt'

class WatchListener extends Event {
  constructor () {
    super()
  }

  body (eventType, fileName) {}
}

new StrictEqualAssertion(
  new ListenerCount(
    new WatcherWithEventTypeAndFilenameListener(
      file,
      { persistent: true, recursive: false, encoding: 'utf8' },
      new WatchListener()
    ).as('watcher'), 'change'
  ), 1
).after(
  new ClosedWatcher(as('watcher'))
).call()
