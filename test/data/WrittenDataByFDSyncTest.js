'use strict'

const { as } = require('@cuties/cutie');
const { EqualAssertion } = require('@cuties/assert');
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
