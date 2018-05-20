'use strict'

const assert = require('assert');
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
  WrittenBufferByFD
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
          ),
          as('buffer')
        ), as('buffer')
      )
    )
  ).call();
