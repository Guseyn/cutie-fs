'use strict'

const { as } = require('@cuties/cutie')
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
  TruncatedFileByFD,
  OpenedFile,
  WrittenFile,
  ReadBufferByFD,
  ClosedFile
} = require('./../../index')

const file = './test/file/files/test-39.txt'
const file2 = './test/file/files/test-39-1.txt'
const data = 'test buffer'
const truncatedLen = 4

new BufferLength(
  new BufferFromString(data).as('buffer')
).as('len')
  .after(
    new StrictEqualAssertion(
      new StringFromBuffer(
        new ReadBufferByFD(
          new TruncatedFileByFD(
            new WrittenFile(
              new OpenedFile(file, 'r+').as('fd'),
              data
            ), truncatedLen
          ),
          new AllocatedBuffer(
            truncatedLen
          ), 0, truncatedLen, 0
        )
      ), 'test'
    ).after(
      new ClosedFile(as('fd'))
    )
  ).call()

new BufferLength(
  new BufferFromString(data).as('buffer')
).as('len')
  .after(
    new StrictEqualAssertion(
      new StringFromBuffer(
        new ReadBufferByFD(
          new TruncatedFileByFD(
            new WrittenFile(
              new OpenedFile(file2, 'r+').as('fd'),
              data
            )
          ),
          new AllocatedBuffer(
            truncatedLen
          ), 0, truncatedLen, 0
        )
      ), '\u0000\u0000\u0000\u0000'
    ).after(
      new ClosedFile(as('fd'))
    )
  ).call()
