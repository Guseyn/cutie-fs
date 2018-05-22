'use strict'

const { as } = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  UnlinkedFile,
  WrittenFile,
  DoesFileExistSync
} = require('./../../index');

const file = './test/file/files/test-43.txt';

new EqualAssertion(
  new DoesFileExistSync(
    new UnlinkedFile(file)
  ), false
).after(
  new WrittenFile(file, '')
).call();
