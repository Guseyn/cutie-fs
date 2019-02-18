'use strict'

const { StrictEqualAssertion } = require('@cuties/assert')
const {
  ReadLinkByPath,
  SymbolicLinkedFile,
  UnlinkedFile,
  WrittenFile
} = require('./../../index')

const file = './test/data/files/test-6.txt'
const linkedFile = './test/data/files/test-link-6.txt'
const data = 'test buffer'

new StrictEqualAssertion(
  new ReadLinkByPath(
    new SymbolicLinkedFile(
      new WrittenFile(file, data),
      linkedFile
    )
  ), file
).after(
  new UnlinkedFile(
    linkedFile
  )
).call()
