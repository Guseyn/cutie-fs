'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  SymbolicLinkedFileSync,
  IsSymbolicLink,
  LinkedStats,
  UnlinkedFile
} = require('./../../index');

const file = './test/file/files/test-33.txt';
const newFile = './test/file/files/linked-test-33.txt';

new Assertion(
  new IsSymbolicLink(
    new LinkedStats(
      new SymbolicLinkedFileSync(file, newFile)
    )
  )
).after(
  new UnlinkedFile(newFile)
).call();
