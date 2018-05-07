const file = './test/data/test.txt';
const data = 'test buffer';
const assert = require('assert');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
} = require('@guseyn/cutie-buffer');
const ReadDataByPath = require('./../../src/data/ReadDataByPath');

new Assertion(
  new AreBuffersEqual(
    new ReadDataByPath(
      file
    ), new BufferFromString(data)
  )
).call();
