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
  WriteStreamWithOpenEvent
} = require('./../../index');

const file = './test/write-stream/files/test-5.txt';

class OpenEvent extends Event {

  constructor() {
    super();
  }

  definedBody(fd) {}

}

new EqualAssertion(
  new ListenerCount( 
    new WriteStreamWithOpenEvent(
      new CreatedWriteStream(
        file
      ), new OpenEvent()
    ), 'open'
  ), 1
).call();
