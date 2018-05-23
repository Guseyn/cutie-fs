'use strict'

const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  CreatedReadStream,
  BytesReadFromReadStream,
  StatsByPath,
  IsSocket
} = require('./../../index');

const file = './test/read-stream/files/test-1.txt';

// TODO: implement cutie-stream and make this test more interesting
//    Use read call for stream and compare BytesReadFromReadStream with number > 0
new EqualAssertion(
  new BytesReadFromReadStream(
    new CreatedReadStream(
      file
    )
  ), 0
).call();
