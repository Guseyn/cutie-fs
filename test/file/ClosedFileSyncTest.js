'use strict'

const {
  Cache,
  As
} = require('@guseyn/cutie');
const { 
  ClosedFileSync,
  OpenedFile
} = require('./../../index');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');

const file = './test/file/files/test-5.txt';

new As(
  new OpenedFile(file, 'r+'), 'openedFile'
).after(
  new EqualAssertion(
    new ClosedFileSync(
      new As('openedFile')
    ), new As('openedFile')
  )
).call();
