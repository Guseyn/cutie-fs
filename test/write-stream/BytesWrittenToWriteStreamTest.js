'use strict'

const fs = require('fs');

const {
  as, Event, AsyncObject
} = require('@cuties/cutie');
const {
  EqualAssertion
} = require('@cuties/assert');
const {
  BufferFromString,
  BufferLength
} = require('@cuties/buffer');
const {
  CreatedWriteStream,
  BytesWrittenToWriteStream
} = require('./../../index');
const {
  WrittenWritable,
  EndedWritable
} = require('@cuties/stream');

const file = './test/write-stream/files/test-1.txt';
const data = 'test buffer';

new BufferLength(
  new BufferFromString(data)
).as('len').after(
  new EndedWritable(
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
