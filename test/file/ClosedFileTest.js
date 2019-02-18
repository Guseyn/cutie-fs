'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  ClosedFile,
  OpenedFile
} = require('./../../index')
const {
  StrictEqualAssertion
} = require('@cuties/assert')

const file = './test/file/files/test-6.txt'

new OpenedFile(file, 'r+').as('openedFile')
  .after(
    new StrictEqualAssertion(
      new ClosedFile(
        as('openedFile')
      ), as('openedFile')
    )
  ).call()
