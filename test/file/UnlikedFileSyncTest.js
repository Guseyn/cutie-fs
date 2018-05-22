'use strict'

const { as } = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  UnlinkedFileSync,
  WrittenFile,
  DoesFileExistSync
} = require('./../../index');

const file = './test/file/files/test-42.txt';

new EqualAssertion(
  new DoesFileExistSync(
    new UnlinkedFileSync(file)
  ), false
).after(
  new WrittenFile(file, '')
).call();
