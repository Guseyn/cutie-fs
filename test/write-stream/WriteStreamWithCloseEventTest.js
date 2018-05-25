'use strict'

const {
  Event
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ListenerCount
} = require('@guseyn/cutie-event');
const {
  CreatedWriteStream,
  WriteStreamWithCloseEvent
} = require('./../../index');

const file = './test/write-stream/files/test-4.txt';

class CloseEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {}

}

new EqualAssertion(
  new ListenerCount( 
    new WriteStreamWithCloseEvent(
      new CreatedWriteStream(
        file
      ), new CloseEvent()
    ), 'close'
  ), 1
).call();
