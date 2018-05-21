'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  OpenedFileSync
} = require('./../../index');

const file = './test/file/files/test-30.txt';

new Assertion(
  new IsNumber(
    new OpenedFileSync(file, 'r+')
  )
).call();
