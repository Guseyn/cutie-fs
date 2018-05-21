const {
  as
} = require('@guseyn/cutie');
const {
  Assertion
} = require('@guseyn/cutie-assert');
const {
  AreBuffersEqual,
  BufferFromString
} = require('@guseyn/cutie-buffer');
const {
  OpenedFile,
  LinkedFile,
  UnlinkedFile,
  WrittenFile,
  LinkedStatsSync,
  StatsByPath,
  IsFile,
  ReadDataByPath
} = require('./../../index');

const file = './test/file/files/test-24.txt';
const newFile = './test/file/files/linked-test-24.txt'

new Assertion(
  new IsFile(
    new LinkedStatsSync(
      new WrittenFile(
        new LinkedFile(
          file, newFile
        ), 'test buffer'
      )
    )
  )
).after(
  new Assertion(
    new AreBuffersEqual(
      new ReadDataByPath(file),
      new BufferFromString('test buffer')
    )
  ).after(
    new UnlinkedFile(newFile)
  )
).call();
