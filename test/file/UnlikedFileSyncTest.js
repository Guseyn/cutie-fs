'use strict'

const { as } = require('@cuties/cutie');
const {
  EqualAssertion
} = require('@cuties/assert');
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
