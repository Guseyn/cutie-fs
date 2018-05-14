'use strict'

const { EqualAssertion } = require('@guseyn/cutie-assert');
const {
  WrittenFile,
  OpenedFile,
  WrittenDataByFD
} = require('./../../index');

const file = './test/data/files/test-10.txt';
const data = 'test buffer';

new EqualAssertion(
  new WrittenDataByFD(
    new OpenedFile(
      new WrittenFile(file, ''), 'w+'
    ), data
  ), data
).call();
