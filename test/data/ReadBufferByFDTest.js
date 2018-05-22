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
  ReadBufferByFD,
  WrittenFile,
  ClosedFile
} = require('./../../index');

const file = './test/data/files/test-2.txt';
const data = 'test buffer';

new BufferLength(
  new BufferFromString(data).as('buffer')
).as('len')
  .after(
    new Assertion(
      new AreBuffersEqual(
        new ReadBufferByFD(
          new WrittenFile(
            new OpenedFile(file, 'w+').as('fd'),
            as('buffer')
          ),
          new AllocatedBuffer(
            as('len')
          ), 0, as('len'), 0
        ), as('buffer')
      )
    ).after(
      new ClosedFile(as('fd'))
    )
  ).call();
