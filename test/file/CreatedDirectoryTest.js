'use strict'

const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  CreatedDirectory,
  DeletedDirectory,
  StatsByPath,
  IsDirectory
} = require('./../../index');

const dir = './test/file/dirs/dir2';

new Assertion(
  new IsDirectory(
    new StatsByPath(
      new CreatedDirectory(dir)
    )
  )
).after(
  new DeletedDirectory(dir)
).call();
