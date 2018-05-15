'use strict'

const { As, Cache } = require('@guseyn/cutie');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
  BufferLength
} = require('@guseyn/cutie-buffer');
const {
  OpenedFile,
  ReadBufferByFD,
  WrittenFile
} = require('./../../index');

const file = './test/data/files/test-2.txt';
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
      new ReadBufferByFD(
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
