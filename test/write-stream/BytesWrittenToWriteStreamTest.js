'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  BufferFromString,
  BufferLength
} = require('@cuties/buffer')
const {
  CreatedWriteStream,
  BytesWrittenToWriteStream
} = require('./../../index')
const {
  WrittenWritable,
  EndedWritable
} = require('@cuties/stream')

const file = './test/write-stream/files/test-1.txt'
const data = 'test buffer'

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
    new StrictEqualAssertion(
      new BytesWrittenToWriteStream(
        as('ws')
      ), as('len')
    )
  )
).call()
