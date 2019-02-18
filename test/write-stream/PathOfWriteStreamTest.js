'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  CreatedWriteStream,
  PathOfWriteStream
} = require('./../../index')

const file = './test/write-stream/files/test-3.txt'

new StrictEqualAssertion(
  new PathOfWriteStream(
    new CreatedWriteStream(
      file
    )
  ), file
).call()
