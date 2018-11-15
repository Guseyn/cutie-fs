'use strict'

const {
  AsyncObject, as
} = require('@cuties/cutie');
const {
  EqualAssertion,
  StrictEqualAssertion
} = require('@cuties/assert');
const {
  CopiedDirectoryRecursively,
  DeletedDirectoryRecursively,
  DoesFileExistSync
} = require('./../../index');

const dir = './test/files/dirs/test-dir-3';
const dest = './test/files/dirs/test-dir-5';

new StrictEqualAssertion(
  new DeletedDirectoryRecursively(
    new CopiedDirectoryRecursively(dir, dest)
  ).as('dest'), dest
).after(
  new EqualAssertion(
    new DoesFileExistSync(as('dest')),
    false
  )
).call();
