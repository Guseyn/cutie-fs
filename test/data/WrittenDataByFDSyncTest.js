'use strict'

const { EqualAssertion } = require('@guseyn/cutie-assert');
const {
  WrittenFile,
  OpenedFile,
  WrittenDataByFDSync
} = require('./../../index');

const file = './test/data/files/test-9.txt';
const data = 'test buffer';

new EqualAssertion(
  new WrittenDataByFDSync(
    new OpenedFile(
      new WrittenFile(file, ''), 'w+'
    ), data
  ), data
).call();
