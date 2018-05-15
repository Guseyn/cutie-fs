'use strict'

const {
  Cache,
  As
} = require('@guseyn/cutie');
const { 
  ClosedFile,
  OpenedFile
} = require('./../../index');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');

const file = './test/file/files/test-6.txt';

new As(
  new OpenedFile(file, 'r+'), 'openedFile'
).after(
  new EqualAssertion(
    new ClosedFile(
      new As('openedFile')
    ), new As('openedFile')
  )
).call();
