'use strict'

const {
  Assertion,
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  ErrorMessage
} = require('@cuties/error')
const {
  AccessibleFileSync,
  FileWithChangedPermissionsByPath
} = require('./../../index')
const fs = require('fs')

const file = './test/file/files/test-1.txt'

new Assertion(
  new AccessibleFileSync(
    file, fs.constants.F_OK
  )
).after(
  new StrictEqualAssertion(
    new ErrorMessage(
      new AccessibleFileSync(
        new FileWithChangedPermissionsByPath(file, 0o000),
        fs.constants.R_OK
      )
    ), 'EACCES: permission denied, access \'./test/file/files/test-1.txt\''
  ).after(
    new FileWithChangedPermissionsByPath(
      file, 0o756
    )
  )
).call()
