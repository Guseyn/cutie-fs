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
  UnwatchedFile,
  WatcherWithEventTypeAndFilenameListener,
  ClosedWatcher
} = require('./../../index')

const file = './test/file/files/test-44.txt'

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
  new UnwatchedFile(file)
    .after(
      new StrictEqualAssertion(
        new ListenerCount(
          as('watcher')
        ), 0
      ).after(
        new ClosedWatcher(as('watcher'))
      )
    )
).call()
