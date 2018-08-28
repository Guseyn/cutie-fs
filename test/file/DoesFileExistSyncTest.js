'use strict'

const {
  Assertion,
  EqualAssertion
} = require('@cuties/assert');
const {
  DoesFileExistSync
} = require('./../../index');

const existingFile = './test/file/files/test-35.txt'
const nonExistingFile = './test/file/files/test-undefined.txt';

new Assertion(
  new DoesFileExistSync(
    existingFile
  )
).call();

new EqualAssertion(
  new DoesFileExistSync(
    nonExistingFile
  ), false
).call();
