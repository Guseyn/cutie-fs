const file = './test/data/test.txt';
const data = 'test buffer';
const buffer = Buffer.from(data);
const len = Buffer.byteLength(data);
const assert = require('assert');
const { Assertion } = require('@guseyn/cutie-assert');
const OpenedFile = require('./../../src/file/OpenedFile');
const WrittenFile = require('./../../src/file/WrittenFile');
const ReadBufferByFD = require('./../../src/data/ReadBufferByFD');
const AreBuffersEqual = require('./AreBuffersEqual');
const AsyncObject = require('@guseyn/cutie').AsyncObject;

new Assertion(
  new AreBuffersEqual(
    new ReadBufferByFD(
      new WrittenFile(
        new OpenedFile(file, 'w+'), buffer
      ), Buffer.alloc(len), 0, len, 0
    ), buffer
  )
).call();
