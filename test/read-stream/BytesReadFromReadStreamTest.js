'use strict'

const fs = require('fs');

const {
  as, Event, AsyncObject
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  BufferFromString,
  BufferLength
} = require('@guseyn/cutie-buffer');
const {
  CreatedReadStream,
  BytesReadFromReadStream,
  StatsByPath,
  IsSocket
} = require('./../../index');
const {
  ReadDataFromReadable
} = require('@guseyn/cutie-stream');

const file = './test/read-stream/files/test-1.txt';
const data = 'test buffer';

new BufferLength(
  new BufferFromString(data)
).as('len').after(
  new ReadDataFromReadable(
    new CreatedReadStream(
      file
    ).as('rs')
  ).after(
    new EqualAssertion(
      new BytesReadFromReadStream(
        as('rs')
      ), as('len')
    ) 
  )
).call();
