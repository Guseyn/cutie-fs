'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  WrittenFileSync,
  ReadDataByPath
} = require('./../../index')

const file = './test/data/files/test-45.txt'
const data = 'test buffer'

new StrictEqualAssertion(
  new ReadDataByPath(
    new WrittenFileSync(file, data), 'utf8'
  ), data
).call()
