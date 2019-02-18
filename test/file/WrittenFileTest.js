'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  WrittenFile,
  ReadDataByPath
} = require('./../../index')

const file = './test/data/files/test-46.txt'
const data = 'test buffer'

new StrictEqualAssertion(
  new ReadDataByPath(
    new WrittenFile(file, data), 'utf8'
  ), data
).call()
