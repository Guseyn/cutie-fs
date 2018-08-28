'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  RenamedFileSync,
  StatsByPath,
  IsFile
} = require('./../../index');

const file = './test/file/files/test-31.txt';
const newFile = './test/file/files/renamed-test-31.txt';

new Assertion(
  new IsFile(
    new StatsByPath(
      new RenamedFileSync(file, newFile)
    )
  )
).after(
  new RenamedFileSync(newFile, file)
).call();
