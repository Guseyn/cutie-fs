'use strict'

const assert = require('assert');
const { as } = require('@cuties/cutie');
const { Assertion } = require('@cuties/assert');
const {
  AreBuffersEqual,
  BufferFromString,
  BufferLength
} = require('@cuties/buffer');
const {
  WrittenFile,
  OpenedFile,
  WrittenBufferByFD,
  ClosedFile
} = require('./../../index');

const file = './test/data/files/test-8.txt';
const data = 'test buffer';

new BufferLength(
  new BufferFromString(data).as('buffer')
).as('len')
  .after(
    new Assertion(
      new AreBuffersEqual(
        new WrittenBufferByFD(
          new OpenedFile(
            new WrittenFile(file, ''), 'w+'
          ).as('fd'),
          as('buffer')
        ), as('buffer')
      )
    ).after(
      new ClosedFile(as('fd'))
    )
  ).call();
