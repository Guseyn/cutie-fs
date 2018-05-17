'use strict'

const {
  As
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  CreatedDirectory,
  DeletedDirectorySync,
} = require('./../../index');

const file = './test/file/dirs/dir2';

new EqualAssertion(
  new DeletedDirectorySync(
    new CreatedDirectory(file)
  ), file
).call();
