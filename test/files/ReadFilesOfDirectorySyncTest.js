'use strict'

const {
  DeepEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  ReadFilesOfDirectorySync
} = require('./../../index');

const dir = './test/files/dirs/test-dir-1';

new DeepEqualAssertion(
  new ReadFilesOfDirectorySync(dir),
  [ 'test-1-1.txt', 'test-1-2.txt', 'test-1-3.txt' ]
).call();
