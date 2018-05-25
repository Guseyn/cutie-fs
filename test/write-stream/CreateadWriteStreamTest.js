'use strict'

const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  CreatedWriteStream,
  PathOfWriteStream
} = require('./../../index');

const file = './test/write-stream/files/test-2.txt';

new EqualAssertion(
  new PathOfWriteStream(
    new CreatedWriteStream(
      file
    )
  ), file
).call();
