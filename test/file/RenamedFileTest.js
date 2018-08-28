'use strict'

const {
  Assertion
} = require('@cuties/assert');
const {
  RenamedFile,
  StatsByPath,
  IsFile
} = require('./../../index');

const file = './test/file/files/test-32.txt';
const newFile = './test/file/files/renamed-test-32.txt';

new Assertion(
  new IsFile(
    new StatsByPath(
      new RenamedFile(file, newFile)
    )
  )
).after(
  new RenamedFile(newFile, file)
).call();
