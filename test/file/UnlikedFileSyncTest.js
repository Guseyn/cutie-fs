'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  UnlinkedFileSync,
  WrittenFile,
  DoesFileExistSync
} = require('./../../index')

const file = './test/file/files/test-42.txt'

new StrictEqualAssertion(
  new DoesFileExistSync(
    new UnlinkedFileSync(file)
  ), false
).after(
  new WrittenFile(file, '')
).call()
