'use strict'

const {
  As
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
      new As(
        new CreatedTemporaryDirectorySync(prefix), 'tmpdir'
      )
    )
  )
).after(
  new DeletedDirectory(
    new As('tmpdir')
  )
).call();
