'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  IsNumber
} = require('@guseyn/cutie-is');
const {
  OpenedFile
} = require('./../../index');

const file = './test/file/files/test-29.txt';

new Assertion(
  new IsNumber(
    new OpenedFile(file, 'r+')
  )
).call();
