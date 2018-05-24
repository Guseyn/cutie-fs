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
  CreatedReadStream,
  ReadStreamWithOpenEvent
} = require('./../../index');

const file = './test/read-stream/files/test-5.txt';

class OpenEvent extends Event {

  constructor() {
    super();
  }

  definedBody(fd) {}

}

new EqualAssertion(
  new ListenerCount( 
    new ReadStreamWithOpenEvent(
      new CreatedReadStream(
        file
      ), new OpenEvent()
    ), 'open'
  ), 1
).call();
