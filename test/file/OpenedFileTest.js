'use strict'

const { as } = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  OpenedFile,
  ClosedFile
} = require('./../../index');

const file = './test/file/files/test-30.txt';

new Assertion(
  new IsNumber(
    new OpenedFile(file, 'r+').as('fd')
  )
).after(
  new ClosedFile(as('fd'))
).call();
