'use strict'

const { StrictEqualAssertion } = require('@cuties/assert')
const {
  ReadLinkByPathSync,
  SymbolicLinkedFile,
  UnlinkedFile,
  WrittenFile
} = require('./../../index')

const file = './test/data/files/test-5.txt'
const linkedFile = './test/data/files/test-link-5.txt'
const data = 'test buffer'

new StrictEqualAssertion(
  new ReadLinkByPathSync(
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
