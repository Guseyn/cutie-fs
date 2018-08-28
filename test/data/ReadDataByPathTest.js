'use strict'

const { Assertion } = require('@cuties/assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
} = require('@cuties/buffer');
const {
  ReadDataByPath,
  WrittenFile
} = require('./../../index');

const file = './test/data/files/test-4.txt';
const data = 'test buffer';

new Assertion(
  new AreBuffersEqual(
    new ReadDataByPath(
      new WrittenFile(file, data)
    ), new BufferFromString(data)
  )
).call();
