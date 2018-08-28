'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  EqualAssertion
} = require('@cuties/assert');
const {
  OpenedFile,
  FileWithChangedPermissionsByFD,
  StatsByFD,
  Mode,
  ClosedFile
} = require('./../../index');

const file = './test/file/files/test-14.txt';

new EqualAssertion(
  new Mode(
    new StatsByFD(
      new FileWithChangedPermissionsByFD(
        new OpenedFile(file, 'r+').as('fd'), 0o400
      )
    )
  ), 33024
).after(
  new FileWithChangedPermissionsByFD(
    as('fd'), 0o777
  ).after(
    new ClosedFile(as('fd'))
  )
).call();
