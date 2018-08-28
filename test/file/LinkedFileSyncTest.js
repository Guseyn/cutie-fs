const {
  as
} = require('@cuties/cutie');
const {
  Assertion
} = require('@cuties/assert');
const {
  AreBuffersEqual,
  BufferFromString
} = require('@cuties/buffer');
const {
  OpenedFile,
  LinkedFileSync,
  UnlinkedFile,
  WrittenFile,
  LinkedStatsSync,
  StatsByPath,
  IsFile,
  ReadDataByPath
} = require('./../../index');

const file = './test/file/files/test-23.txt';
const newFile = './test/file/files/linked-test-23.txt'

new Assertion(
  new IsFile(
    new LinkedStatsSync(
      new WrittenFile(
        new LinkedFileSync(
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
