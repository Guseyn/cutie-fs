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
  CreatedReadStream,
  BytesReadFromReadStream
} = require('./../../index')
const {
  ReadDataFromReadable
} = require('@cuties/stream')

const file = './test/read-stream/files/test-1.txt'
const data = 'test buffer'

new BufferLength(
  new BufferFromString(data)
).as('len').after(
  new ReadDataFromReadable(
    new CreatedReadStream(
      file
    ).as('rs')
  ).after(
    new StrictEqualAssertion(
      new BytesReadFromReadStream(
        as('rs')
      ), as('len')
    )
  )
).call()
