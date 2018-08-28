'use strict'

const { as } = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  SyncedFile,
  OpenedFile,
  StatsByFD,
  IsFile,
  ClosedFile
} = require('./../../index');

const file = './test/file/files/test-37.txt';

new Assertion(
  new IsFile(
    new StatsByFD(
      new SyncedFile(
        new OpenedFile(file, 'r+').as('fd')
      )
    )
  )
).after(
  new ClosedFile(as('fd'))
).call();
