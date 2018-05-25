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
  CreatedWriteStream,
  BytesWrittenToWriteStream
} = require('./../../index');
const {
  WrittenWritable,
  EndWritable
} = require('@guseyn/cutie-stream');

const file = './test/write-stream/files/test-1.txt';
const data = 'test buffer';

new BufferLength(
  new BufferFromString(data)
).as('len').after(
  new EndWritable(
    new WrittenWritable(
      new CreatedWriteStream(
        file
      ).as('ws'), data
    )
  ).after(
    new EqualAssertion(
      new BytesWrittenToWriteStream(
        as('ws')
      ), as('len')
    ) 
  )
).call();
