'use strict'

const { as } = require('@cuties/cutie')
const { StrictEqualAssertion } = require('@cuties/assert')
const {
  WrittenFile,
  OpenedFile,
  WrittenDataByFD,
  ClosedFile
} = require('./../../index')

const file = './test/data/files/test-10.txt'
const data = 'test buffer'

new StrictEqualAssertion(
  new WrittenDataByFD(
    new OpenedFile(
      new WrittenFile(file, ''), 'w+'
    ).as('fd'), data
  ), data
).after(
  new ClosedFile(as('fd'))
).call()
