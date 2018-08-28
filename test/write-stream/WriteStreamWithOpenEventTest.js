'use strict'

const {
  Event
} = require('@cuties/cutie');
const {
  EqualAssertion
} = require('@cuties/assert');
const {
  ListenerCount
} = require('@cuties/event');
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
