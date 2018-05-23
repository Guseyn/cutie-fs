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
  UnwatchedFile,
  WatcherWithEventTypeAndFilenameListener,
  ClosedWatcher
} = require('./../../index');

const file = './test/file/files/test-44.txt';

class WatchListener extends Event {

  constructor() {
    super();
  }

  definedBody(eventType, fileName) {
    console.log(eventType);
  }

}

new EqualAssertion(
  new ListenerCount(
    new WatcherWithEventTypeAndFilenameListener(
      file,  new WatchListener()
    ).as('watcher'), 'change'
  ), 1
).after(
  new UnwatchedFile(file)
    .after(
      new EqualAssertion(
        new ListenerCount(
          as('watcher')
        ), 0
      ).after(
        new ClosedWatcher(as('watcher'))
      )
    )
).call();
