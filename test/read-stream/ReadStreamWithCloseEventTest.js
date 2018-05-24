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
  ReadStreamWithCloseEvent
} = require('./../../index');

const file = './test/read-stream/files/test-4.txt';

class CloseEvent extends Event {

  constructor() {
    super();
  }

  definedBody() {}

}

new EqualAssertion(
  new ListenerCount( 
    new ReadStreamWithCloseEvent(
      new CreatedReadStream(
        file
      ), new CloseEvent()
    ), 'close'
  ), 1
).call();
