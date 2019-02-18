'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  SymbolicLinkedFile,
  LinkedFileWithChangedPermissionsSync,
  LinkedStats,
  UnlinkedFile,
  Mode
} = require('./../../index')

const file = './test/file/files/test-27.txt'
const newFile = './test/file/files/linked-test-27.txt'

new StrictEqualAssertion(
  new Mode(
    new LinkedStats(
      new LinkedFileWithChangedPermissionsSync(
        new SymbolicLinkedFile(
          file, newFile
        ), 0o400
      )
    )
  ), 41216
).after(
  new UnlinkedFile(newFile)
).call()
