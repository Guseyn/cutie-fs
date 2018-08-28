'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  CreatedWriteStream,
  PathOfWriteStream
} = require('./../../index');

const file = './test/write-stream/files/test-3.txt';

new EqualAssertion(
  new PathOfWriteStream(
    new CreatedWriteStream(
      file
    )
  ), file
).call();
