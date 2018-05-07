const file = './test/data/test.txt';
const linkedFile = './test/data/test-link.txt';
const data = 'test buffer';
const assert = require('assert');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
} = require('@guseyn/cutie-buffer');
const ReadLinkDataByPath = require('./../../src/data/ReadLinkDataByPath');
const LinkedFile = require('./../../src/file/LinkedFile');


new Assertion(
  new AreBuffersEqual(
    new ReadLinkDataByPath(
      new LinkedFile(file, linkedFile)
    ), new BufferFromString(data)
  )
);//.call();
