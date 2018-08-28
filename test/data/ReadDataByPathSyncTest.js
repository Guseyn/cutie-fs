'use strict'

const { Assertion } = require('@cuties/assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
} = require('@cuties/buffer');
const {
  ReadDataByPathSync,
  WrittenFile
} = require('./../../index');

const file = './test/data/files/test-3.txt';
const data = 'test buffer';

new Assertion(
  new AreBuffersEqual(
    new ReadDataByPathSync(
      new WrittenFile(file, data)
    ), new BufferFromString(data)
  )
).call();
