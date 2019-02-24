'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert')
const {
  Keys
} = require('@cuties/object')
const {
  WrittenDataToFiles,
  ReadDataFromFiles
} = require('./../../index')

const filesWithData = {
  './test/data/files/test-11.txt': 'data1',
  './test/data/files/test-12.txt': 'data2',
  './test/data/files/test-13.txt': 'data3'
}

new DeepStrictEqualAssertion(
  new WrittenDataToFiles(
    filesWithData,
    { encoding: 'utf8' }
  ),
  filesWithData
).after(
  new DeepStrictEqualAssertion(
    new ReadDataFromFiles(
      new Keys(filesWithData),
      { encoding: 'utf8' }
    ), filesWithData
  )
).call()

new DeepStrictEqualAssertion(
  new WrittenDataToFiles(
    {},
    { encoding: 'utf8' }
  ),
  {}
).call()
