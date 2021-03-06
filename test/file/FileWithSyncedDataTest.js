'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  OpenedFile,
  FileWithSyncedData,
  ClosedFile
} = require('./../../index')

const file = './test/file/files/test-22.txt'

new FileWithSyncedData(
  new OpenedFile(file, 'r+').as('fd')
).as('synced_fd')
  .after(
    new StrictEqualAssertion(
      as('fd'), as('synced_fd')
    ).after(
      new ClosedFile(as('fd'))
    )
  ).call()
