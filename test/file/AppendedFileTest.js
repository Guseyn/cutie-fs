'use strict'

const { 
  AppendedFile,
  ReadDataByPath,
  WrittenFile
} = require('./../../index');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AreBuffersEqual,
  BufferFromString
} = require('@guseyn/cutie-buffer');

const file = './test/file/files/test-4.txt';
const data = 'test buffer';

new Assertion(
  new AreBuffersEqual(
    new ReadDataByPath(
      new AppendedFile(
        new AppendedFile(file, data), data
      )
    ), new BufferFromString(`${data}${data}`)
  ) 
).after(
  new WrittenFile(file, '', 'utf8')
).call();
