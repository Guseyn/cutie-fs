'use strict'

const { as } = require('@guseyn/cutie');
const { Assertion } = require('@guseyn/cutie-assert');
const {
  AllocatedBuffer,
  AreBuffersEqual,
  BufferFromString,
  BufferLength
} = require('@guseyn/cutie-buffer');
const {
  OpenedFile,
  ReadBufferByFDSync,
  WrittenFile,
  UnlinkedFile
} = require('./../../index');

const file = './test/data/files/test-1.txt';
const data = 'test buffer';

new BufferLength(
  new BufferFromString(data).as('buffer')
).as('len')
  .after(
    new Assertion(
      new ReadBufferByFDSync(
        new WrittenFile(
          new OpenedFile(file, 'w+'),
          as('buffer')
        ),
        new AllocatedBuffer(
          as('len')
        ), 0, as('len'), 0
      ), as('buffer')
    )
  ).call();
