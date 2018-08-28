'use strict'

const { as } = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
const {
  OpenedFileSync,
  ClosedFile
} = require('./../../index');

const file = './test/file/files/test-29.txt';

new Assertion(
  new IsNumber(
    new OpenedFileSync(file, 'r+').as('fd')
  )
).after(
  new ClosedFile(as('fd'))
).call();
