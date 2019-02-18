'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  SymbolicLinkedFile,
  LinkedFileWithChangedPermissions,
  LinkedStats,
  UnlinkedFile,
  Mode
} = require('./../../index')

const file = './test/file/files/test-28.txt'
const newFile = './test/file/files/linked-test-28.txt'

new StrictEqualAssertion(
  new Mode(
    new LinkedStats(
      new LinkedFileWithChangedPermissions(
        new SymbolicLinkedFile(
          file, newFile
        ), 0o400
      )
    )
  ), 41216
).after(
  new UnlinkedFile(newFile)
).call()
