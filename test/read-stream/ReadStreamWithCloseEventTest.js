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
