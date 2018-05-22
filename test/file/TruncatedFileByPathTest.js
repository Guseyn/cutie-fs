'use strict'

const { as } = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  AllocatedBuffer,
  StringFromBuffer,
  BufferLength,
  BufferFromString,
} = require('@guseyn/cutie-buffer');
const {
  TruncatedFileByPath,
  WrittenFile,
  ReadDataByPath,
  ClosedFile
} = require('./../../index');

const file = './test/file/files/test-41.txt';
const data = 'test buffer';
const truncatedLen = 4;

new BufferLength(
  new BufferFromString(data).as('buffer')
).as('len')
  .after(
    new EqualAssertion(
      new StringFromBuffer(
        new ReadDataByPath(
          new TruncatedFileByPath(
            new WrittenFile(
              file, data
            ), truncatedLen
          ),
          new AllocatedBuffer(
            truncatedLen
          ), 0, truncatedLen, 0
        )
      ), data.slice(0, truncatedLen)
    )
  ).call();
