'use strict'

const {
  as, Event
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ListenerCount
} = require('@guseyn/cutie-event');
const {
  WatcherWithEventTypeAndFilenameListener,
  WatcherWithErrorEvent,
  ClosedWatcher
} = require('./../../index');

const file = './test/watcher/files/test-3.txt';

class WatchListener extends Event {

  constructor() {
    super();
  }

  definedBody(eventType, fileName) {}

}

class ErrorEvent extends Event {

  constructor() {
    super();
  }

  definedBody(error) {}

}

new EqualAssertion(
  new ListenerCount(
    new WatcherWithErrorEvent(
      new WatcherWithEventTypeAndFilenameListener(
        file, new WatchListener()
      ).as('watcher'), new ErrorEvent()
    ), 'error'
  ), 1
).after(
  new ClosedWatcher(as('watcher'))
).call();
