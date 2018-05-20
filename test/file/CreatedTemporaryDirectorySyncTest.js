'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  StatsByPath,
  IsDirectory,
  CreatedTemporaryDirectorySync,
  DeletedDirectory,
} = require('./../../index');

const prefix = './test/file/dirs/';

new Assertion(
  new IsDirectory(
    new StatsByPath(
      new CreatedTemporaryDirectorySync(prefix).as('tmpdir')
    )
  )
).after(
  new DeletedDirectory(
    as('tmpdir')
  )
).call();
