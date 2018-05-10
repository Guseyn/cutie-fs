const file = './test/data/files/test-3.txt';
const data = 'test buffer';
const assert = require('assert');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
} = require('@guseyn/cutie-buffer');
const ReadDataByPathSync = require('./../../src/data/ReadDataByPathSync');
const WrittenFile = require('./../../src/file/WrittenFile');

new Assertion(
  new AreBuffersEqual(
    new ReadDataByPathSync(
      new WrittenFile(file, data)
    ), new BufferFromString(data)
  )
).call();
