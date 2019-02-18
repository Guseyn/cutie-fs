'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  CreatedDirectory,
  DeletedDirectorySync
} = require('./../../index')

const file = './test/file/dirs/dir3'

new StrictEqualAssertion(
  new DeletedDirectorySync(
    new CreatedDirectory(file)
  ), file
).call()
