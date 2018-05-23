'use strict'

const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  CreatedReadStream,
  PathOfReadStream
} = require('./../../index');

const file = './test/read-stream/files/test-1.txt';

new EqualAssertion(
  new PathOfReadStream(
    new CreatedReadStream(
      file
    )
  ), file
).call();
