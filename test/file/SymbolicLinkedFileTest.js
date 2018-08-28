'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  SymbolicLinkedFile,
  IsSymbolicLink,
  LinkedStats,
  UnlinkedFile
} = require('./../../index');

const file = './test/file/files/test-34.txt';
const newFile = './test/file/files/linked-test-34.txt';

new Assertion(
  new IsSymbolicLink(
    new LinkedStats(
      new SymbolicLinkedFile(file, newFile)
    )
  )
).after(
  new UnlinkedFile(newFile)
).call();
