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
