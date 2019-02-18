'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  UnlinkedFile,
  WrittenFile,
  DoesFileExistSync
} = require('./../../index')

const file = './test/file/files/test-43.txt'

new StrictEqualAssertion(
  new DoesFileExistSync(
    new UnlinkedFile(file)
  ), false
).after(
  new WrittenFile(file, '')
).call()
