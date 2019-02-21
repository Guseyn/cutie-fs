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
  CreatedWriteStream,
  WriteStreamWithCloseEvent
} = require('./../../index')

const file = './test/write-stream/files/test-4.txt'

class CloseEvent extends Event {
  constructor () {
    super()
  }

  body () {}
}

new StrictEqualAssertion(
  new ListenerCount(
    new WriteStreamWithCloseEvent(
      new CreatedWriteStream(
        file
      ), new CloseEvent()
    ), 'close'
  ), 1
).call()
