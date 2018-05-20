'use strict'

const {
  as
} = require('@guseyn/cutie');
const { 
  ClosedFileSync,
  OpenedFile
} = require('./../../index');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');

const file = './test/file/files/test-5.txt';

new OpenedFile(file, 'r+').as('openedFile')
  .after(
    new EqualAssertion(
      new ClosedFileSync(
        as('openedFile')
      ), as('openedFile')
    )
  ).call();
