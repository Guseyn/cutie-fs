const file = './test/data/test.txt';
const data = 'test buffer';
const assert = require('assert');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
} = require('@guseyn/cutie-buffer');
const ReadDataByPathSync = require('./../../src/data/ReadDataByPathSync');

new Assertion(
  new AreBuffersEqual(
    new ReadDataByPathSync(
      file
    ), new BufferFromString(data)
  )
).call();
