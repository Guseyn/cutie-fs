'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  FileWithChangedPermissionsByPath,
  StatsByPath,
  Mode
} = require('./../../index')

const file = './test/file/files/test-16.txt'

new StrictEqualAssertion(
  new Mode(
    new StatsByPath(
      new FileWithChangedPermissionsByPath(
        file, 0o400
      )
    )
  ), 33024
).after(
  new FileWithChangedPermissionsByPath(
    file, 0o777
  )
).call()
