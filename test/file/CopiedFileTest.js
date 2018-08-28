'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  CopiedFile,
  StatsByPath,
  IsFile,
  UnlinkedFile
} = require('./../../index');

const src = './test/file/files/test-8.txt';
const dest = './test/file/files/test-8-copy.txt'

new Assertion(
  new IsFile(
    new StatsByPath(
      new CopiedFile(src, dest)
    )
  )
).after(
  new UnlinkedFile(dest)
).call();
