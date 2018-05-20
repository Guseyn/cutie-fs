'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  OpenedFile,
  FileWithChangedPermissionsByFDSync,
  StatsByFD,
  Mode
} = require('./../../index');

const file = './test/file/files/test-13.txt';

new EqualAssertion(
  new Mode(
    new StatsByFD(
      new FileWithChangedPermissionsByFDSync(
        new OpenedFile(file, 'r+').as('fd'), 0o400
      )
    )
  ), 33024
).after(
  new FileWithChangedPermissionsByFDSync(
    as('fd'), 0o777
  )
).call();
