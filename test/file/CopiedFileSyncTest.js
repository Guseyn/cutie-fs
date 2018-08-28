'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  CopiedFileSync,
  StatsByPath,
  IsFile,
  UnlinkedFile
} = require('./../../index');

const src = './test/file/files/test-7.txt';
const dest = './test/file/files/test-7-copy.txt'

new Assertion(
  new IsFile(
    new StatsByPath(
      new CopiedFileSync(src, dest)
    )
  )
).after(
  new UnlinkedFile(dest)
).call();
