'use strict'

const {
  As
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  OpenedFile,
  FileWithChangedPermissionsByFD,
  StatsByFD,
  Mode
} = require('./../../index');

const file = './test/file/files/test-14.txt';

new EqualAssertion(
  new Mode(
    new StatsByFD(
      new FileWithChangedPermissionsByFD(
        new As(
          new OpenedFile(file, 'r+'), 'fd'
        ), 0o400
      )
    )
  ), 33024
).after(
  new FileWithChangedPermissionsByFD(
    new As('fd'), 0o777
  )
).call();
