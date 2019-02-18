'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  CreatedReadStream,
  PathOfReadStream
} = require('./../../index')

const file = './test/read-stream/files/test-1.txt'

new StrictEqualAssertion(
  new PathOfReadStream(
    new CreatedReadStream(
      file
    )
  ), file
).call()
