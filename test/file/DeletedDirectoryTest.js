'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  CreatedDirectory,
  DeletedDirectory
} = require('./../../index')

const file = './test/file/dirs/dir4'

new StrictEqualAssertion(
  new DeletedDirectory(
    new CreatedDirectory(file)
  ), file
).call()
