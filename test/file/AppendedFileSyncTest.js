'use strict'

const { 
  AppendedFileSync,
  ReadDataByPath,
  WrittenFile
} = require('./../../index');
const {
  Assertion
} = require('@cuties/assert');
const {
  AreBuffersEqual,
  BufferFromString
} = require('@cuties/buffer');

const file = './test/file/files/test-3.txt';
const data = 'test buffer';

new Assertion(
  new AreBuffersEqual(
    new ReadDataByPath(
      new AppendedFileSync(
        new AppendedFileSync(file, data), data
      )
    ), new BufferFromString(`${data}${data}`)
  ) 
).after(
  new WrittenFile(file, '', 'utf8')
).call();
