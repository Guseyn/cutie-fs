const file = './test/data/files/test-8.txt';
const data = 'test buffer';
const assert = require('assert');
const { Cache, As } = require('@guseyn/cutie');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AreBuffersEqual,
  BufferFromString,
  BufferLength
} = require('@guseyn/cutie-buffer');
const WrittenFile = require('./../../src/file/WrittenFile');
const OpenedFile = require('./../../src/file/OpenedFile');
const WrittenBufferByFD = require('./../../src/data/WrittenBufferByFD');

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
      new WrittenBufferByFD(
        new OpenedFile(
          new WrittenFile(file, ''), 'w+'
        ),
        new As('buffer')
      ), new As('buffer')
    )
  )
).call();
