'use strict'

const { as } = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
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