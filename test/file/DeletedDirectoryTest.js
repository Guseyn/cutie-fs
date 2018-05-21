'use strict'

const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  CreatedDirectory,
  DeletedDirectory,
} = require('./../../index');

const file = './test/file/dirs/dir4';

new EqualAssertion(
  new DeletedDirectory(
    new CreatedDirectory(file)
  ), file
).call();
