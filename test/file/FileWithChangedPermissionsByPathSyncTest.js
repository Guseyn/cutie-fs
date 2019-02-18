'use strict'

const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  FileWithChangedPermissionsByPathSync,
  StatsByPath,
  Mode
} = require('./../../index')

const file = './test/file/files/test-15.txt'

new StrictEqualAssertion(
  new Mode(
    new StatsByPath(
      new FileWithChangedPermissionsByPathSync(
        file, 0o400
      )
    )
  ), 33024
).after(
  new FileWithChangedPermissionsByPathSync(
    file, 0o777
  )
).call()
