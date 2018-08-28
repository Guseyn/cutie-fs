'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  CreatedDirectorySync,
  DeletedDirectory,
  StatsByPath,
  IsDirectory
} = require('./../../index');

const dir = './test/file/dirs/dir1';

new Assertion(
  new IsDirectory(
    new StatsByPath(
      new CreatedDirectorySync(dir)
    )
  )
).after(
  new DeletedDirectory(dir)
).call();
