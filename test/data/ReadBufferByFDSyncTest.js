const file = './test/data/test.txt';
const data = 'test buffer';
const assert = require('assert');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
  BufferLength
} = require('@guseyn/cutie-buffer');
const OpenedFile = require('./../../src/file/OpenedFile');
const ReadBufferByFDSync = require('./../../src/data/ReadBufferByFDSync');
const WrittenFile = require('./../../src/file/WrittenFile');
const { As, Cache } = require('@guseyn/cutie');

new Cache(
  new As(
    new BufferLength(
      new As(
        new BufferFromString(data), 'buffer'
      )
    ), 'len'
  )
).forTree(
  new Assertion(
    new AreBuffersEqual(
      new ReadBufferByFDSync(
        new WrittenFile(
          new OpenedFile(file, 'w+'),
          new As('buffer')
        ),
        new AllocatedBuffer(
          new As('len')
        ), 0, new As('len'), 0
      ), new As('buffer')
    )
  )
).call();
