'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  CopiedDirectoryRecursively,
  DeletedDirectoryRecursively,
  DoesFileExistSync
} = require('./../../index')

const dir = './test/files/dirs/test-dir-3'
const dest = './test/files/dirs/test-dir-5'

new StrictEqualAssertion(
  new DeletedDirectoryRecursively(
    new CopiedDirectoryRecursively(dir, dest)
  ).as('dest'), dest
).after(
  new StrictEqualAssertion(
    new DoesFileExistSync(as('dest')),
    false
  )
).call()
