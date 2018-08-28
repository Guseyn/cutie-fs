'use strict'

const {
  as
} = require('@cuties/cutie');
const { 
  ClosedFile,
  OpenedFile
} = require('./../../index');
const {
  EqualAssertion
} = require('@cuties/assert');

const file = './test/file/files/test-6.txt';

new OpenedFile(file, 'r+').as('openedFile')
  .after(
    new EqualAssertion(
      new ClosedFile(
        as('openedFile')
      ), as('openedFile')
    )
  ).call();
