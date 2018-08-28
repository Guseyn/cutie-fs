'use strict'

const { as } = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  IsNumber
} = require('@cuties/is');
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
