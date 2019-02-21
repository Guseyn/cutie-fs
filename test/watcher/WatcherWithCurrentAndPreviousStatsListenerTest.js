'use strict'

const {
  Event
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  ListenerCount
} = require('@cuties/event')
const {
  WatcherWithCurrentAndPreviousStatsListener,
  UnwatchedFile
} = require('./../../index')

const file = './test/watcher/files/test-2.txt'

class WatchListener extends Event {
  constructor () {
    super()
  }

  body (current, previous) {}
}

new StrictEqualAssertion(
  new ListenerCount(
    new WatcherWithCurrentAndPreviousStatsListener(
      file, { persistent: true, interval: 5007 }, new WatchListener()
    ).as('watcher'), 'change'
  ), 1
).after(
  new UnwatchedFile(file)
).call()
