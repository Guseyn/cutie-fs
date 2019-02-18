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

const file = './test/watcher/files/test-1.txt'

class WatchListener extends Event {
  constructor () {
    super()
  }

  definedBody (eventType, fileName) {}
}

new StrictEqualAssertion(
  new ListenerCount(
    new WatcherWithEventTypeAndFilenameListener(
      file, new WatchListener()
    ).as('watcher'), 'change'
  ), 1
).after(
  new ClosedWatcher(
    as('watcher')
  ).after(
    new StrictEqualAssertion(
      new ListenerCount(
        as('watcher')
      ), 0
    )
  )
).call()
