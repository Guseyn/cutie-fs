'use strict'

const { as } = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  SyncedFileSync,
  OpenedFile,
  StatsByFD,
  IsFile,
  ClosedFile
} = require('./../../index');

const file = './test/file/files/test-36.txt';

new Assertion(
  new IsFile(
    new StatsByFD(
      new SyncedFileSync(
        new OpenedFile(file, 'r+').as('fd')
      )
    )
  )
).after(
  new ClosedFile(as('fd'))
).call();
