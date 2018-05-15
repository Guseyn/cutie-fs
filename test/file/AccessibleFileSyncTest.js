'use strict'

const {
  Assertion,
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  AreBuffersEqual,
  BufferFromString
} = require('@guseyn/cutie-buffer');
const {
  ErrorMessage
} = require('@guseyn/cutie-error');
const {
  AccessibleFileSync,
  FileWithChangedPermissionsByPath,
} = require('./../../index');
const fs = require('fs');

const file = './test/file/files/test-1.txt';
const data = 'test buffer';

new Assertion(
  new AccessibleFileSync(
    file, fs.constants.F_OK
  )
).after(
  new EqualAssertion(
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
).call();
