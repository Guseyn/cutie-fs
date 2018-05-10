const file = './test/data/files/test-1.txt';
const data = 'test buffer';
const assert = require('assert');
const { As, Cache } = require('@guseyn/cutie');
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
const UnlinkedFile = require('./../../src/file/UnlinkedFile');

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
).call();
