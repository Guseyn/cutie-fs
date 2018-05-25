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
  WatcherWithCurrentAndPreviousStatsListener,
  UnwatchedFile
} = require('./../../index');

const file = './test/watcher/files/test-2.txt';

class WatchListener extends Event {

  constructor() {
    super();
  }

  definedBody(current, previous) {}

}

new EqualAssertion(
  new ListenerCount(
    new WatcherWithCurrentAndPreviousStatsListener(
      file,  new WatchListener()
    ).as('watcher'), 'change'
  ), 1
).after(
  new UnwatchedFile(file)
).call();
