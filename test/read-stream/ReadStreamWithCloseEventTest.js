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
  CreatedReadStream,
  ReadStreamWithCloseEvent
} = require('./../../index')

const file = './test/read-stream/files/test-4.txt'

class CloseEvent extends Event {
  constructor () {
    super()
  }

  definedBody () {}
}

new StrictEqualAssertion(
  new ListenerCount(
    new ReadStreamWithCloseEvent(
      new CreatedReadStream(
        file
      ), new CloseEvent()
    ), 'close'
  ), 1
).call()
