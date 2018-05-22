'use strict'

const { as } = require('@guseyn/cutie');
const { EqualAssertion } = require('@guseyn/cutie-assert');
const {
  WrittenFile,
  OpenedFile,
  WrittenDataByFDSync,
  ClosedFile
} = require('./../../index');

const file = './test/data/files/test-9.txt';
const data = 'test buffer';

new EqualAssertion(
  new WrittenDataByFDSync(
    new OpenedFile(
      new WrittenFile(file, ''), 'w+'
    ).as('fd'), data
  ), data
).after(
  new ClosedFile(as('fd'))
).call();
