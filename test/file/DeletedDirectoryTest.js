'use strict'

const {
  As
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  CreatedDirectory,
  DeletedDirectory,
} = require('./../../index');

const file = './test/file/dirs/dir3';

new EqualAssertion(
  new DeletedDirectory(
    new CreatedDirectory(file)
  ), file
).call();
