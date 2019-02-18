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
  ReadStreamWithOpenEvent
} = require('./../../index')

const file = './test/read-stream/files/test-5.txt'

class OpenEvent extends Event {
  constructor () {
    super()
  }

  definedBody (fd) {}
}

new StrictEqualAssertion(
  new ListenerCount(
    new ReadStreamWithOpenEvent(
      new CreatedReadStream(
        file
      ), new OpenEvent()
    ), 'open'
  ), 1
).call()
