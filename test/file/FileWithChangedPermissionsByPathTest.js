'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  OpenedFile,
  FileWithChangedPermissionsByPath,
  StatsByPath,
  Mode
} = require('./../../index');

const file = './test/file/files/test-16.txt';

new EqualAssertion(
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
).call();
