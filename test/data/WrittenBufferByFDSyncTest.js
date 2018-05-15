'use strict'

const { Cache, As } = require('@guseyn/cutie');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AreBuffersEqual,
  BufferFromString,
  BufferLength
} = require('@guseyn/cutie-buffer');
const {
  WrittenFile,
  OpenedFile,
  WrittenBufferByFDSync
} = require('./../../index');

const file = './test/data/files/test-7.txt';
const data = 'test buffer';

new As(
  new BufferLength(
    new As(
      new BufferFromString(data), 'buffer'
    )
  ), 'len'
).after(
  new Assertion(
    new AreBuffersEqual(
      new WrittenBufferByFDSync(
        new OpenedFile(
          new WrittenFile(file, ''), 'w+'
        ),
        new As('buffer')
      ), new As('buffer')
    )
  )
).call();
