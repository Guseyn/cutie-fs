const file = './test/data/files/test-4.txt';
const data = 'test buffer';
const assert = require('assert');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
} = require('@guseyn/cutie-buffer');
const ReadDataByPath = require('./../../src/data/ReadDataByPath');
const WrittenFile = require('./../../src/file/WrittenFile');

new Assertion(
  new AreBuffersEqual(
    new ReadDataByPath(
      new WrittenFile(file, data)
    ), new BufferFromString(data)
  )
).call();
