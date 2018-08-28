'use strict'

const {
  EqualAssertion
} = require('@cuties/assert');
const {
  OpenedFile,
  SymbolicLinkedFile,
  LinkedFileWithChangedPermissionsSync,
  LinkedStats,
  StatsByPath,
  UnlinkedFile,
  Mode
} = require('./../../index');

const file = './test/file/files/test-27.txt';
const newFile = './test/file/files/linked-test-27.txt';

new EqualAssertion(
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
).call();
