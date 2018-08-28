'use strict'

const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  ReadFilesOfDirectory
} = require('./../../index');

const dir = './test/files/dirs/test-dir-2';

new DeepEqualAssertion(
  new ReadFilesOfDirectory(dir),
  [ 'test-2-1.txt', 'test-2-2.txt', 'test-2-3.txt' ]
).call();
