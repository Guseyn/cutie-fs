'use strict'

const { as } = require('@guseyn/cutie');
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

new BufferLength(
  new BufferFromString(data).as('buffer')
).as('len')
  .after(
    new Assertion(
      new AreBuffersEqual(
        new WrittenBufferByFDSync(
          new OpenedFile(
            new WrittenFile(file, ''), 'w+'
          ),
          as('buffer')
        ), as('buffer')
      )
    )
  ).call();
