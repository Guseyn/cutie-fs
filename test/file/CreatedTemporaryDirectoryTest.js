'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  StatsByPath,
  IsDirectory,
  CreatedTemporaryDirectory,
  DeletedDirectory,
} = require('./../../index');

const prefix = './test/file/dirs/';

new Assertion(
  new IsDirectory(
    new StatsByPath(
      new CreatedTemporaryDirectory(prefix).as('tmpdir')
    )
  )
).after(
  new DeletedDirectory(
    as('tmpdir')
  )
).call();
