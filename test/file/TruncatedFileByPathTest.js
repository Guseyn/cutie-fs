'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  AllocatedBuffer,
  StringFromBuffer,
  BufferLength,
  BufferFromString
} = require('@cuties/buffer')
const {
  TruncatedFileByPath,
  WrittenFile,
  ReadDataByPath
} = require('./../../index')

const file = './test/file/files/test-41.txt'
const file2 = './test/file/files/test-41-1.txt'
const data = 'test buffer'
const truncatedLen = 4

new BufferLength(
  new BufferFromString(data).as('buffer')
).as('len')
  .after(
    new StrictEqualAssertion(
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
  ).call()

new BufferLength(
  new BufferFromString(data).as('buffer')
).as('len')
  .after(
    new StrictEqualAssertion(
      new StringFromBuffer(
        new ReadDataByPath(
          new TruncatedFileByPath(
            new WrittenFile(
              file2, data
            )
          ),
          new AllocatedBuffer(
            truncatedLen
          ), 0, truncatedLen, 0
        )
      ), ''
    )
  ).call()
