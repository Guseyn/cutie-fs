'use strict'

const {
  as, Event
} = require('@cuties/cutie');
const {
  EqualAssertion
} = require('@cuties/assert');
const {
  ListenerCount
} = require('@cuties/event');
const {
  WatcherWithEventTypeAndFilenameListener,
  ClosedWatcher
} = require('./../../index');

const file = './test/watcher/files/test-4.txt';

class WatchListener extends Event {

  constructor() {
    super();
  }

  definedBody(eventType, fileName) {}

}

new EqualAssertion(
  new ListenerCount(
    new WatcherWithEventTypeAndFilenameListener(
      file,  new WatchListener()
    ).as('watcher'), 'change'
  ), 1
).after(
  new ClosedWatcher(as('watcher'))
).call();
