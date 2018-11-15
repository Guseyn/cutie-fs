'use strict'

const {
  AsyncObject,
  as
} = require('@cuties/cutie');
const {
  StrictEqualAssertion,
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  CopiedDirectoryRecursively,
  ReadFilesOfDirectoryRecursively,
  DeletedDirectoryRecursively
} = require('./../../index');

const dir = './test/files/dirs/test-dir-3';
const dest = './test/files/dirs/test-dir-4';

// We need to sort files from ReadFilesOfDirectoryRecursively for testing,
//  because ReadFilesOfDirectoryRecursively is asynchronous
class SortedFiles extends AsyncObject {

  constructor(files) {
    super(files);
  }

  definedSyncCall() {
    return (files) => {
      files = files.sort((file1, file2) => {
        return file1 <= file2 ? -1 : 1;
      });
      return files;
    }
  }

}

new StrictEqualAssertion(
  new CopiedDirectoryRecursively(dir, dest).as('copiedDir'), dest
).after(
  new DeepEqualAssertion(
    new SortedFiles(
      new ReadFilesOfDirectoryRecursively(as('copiedDir'))
    ), 
    ['test/files/dirs/test-dir-4/test-3-1.txt',
      'test/files/dirs/test-dir-4/test-dir-3-1/test-3-1-1.txt',
      'test/files/dirs/test-dir-4/test-dir-3-1/test-dir-3-1-1/test-3-1-1-1.txt',
      'test/files/dirs/test-dir-4/test-dir-3-1/test-dir-3-1-1/test-3-1-1-2.txt',
      'test/files/dirs/test-dir-4/test-dir-3-2/test-3-2-1.txt',
      'test/files/dirs/test-dir-4/test-dir-3-2/test-3-2-2.txt',
      'test/files/dirs/test-dir-4/test-dir-3-2/test-dir-3-2-1/test-3-2-1-1.txt',
      'test/files/dirs/test-dir-4/test-dir-3-3/test-3-3-1.txt',
      'test/files/dirs/test-dir-4/test-dir-3-3/test-3-3-2.txt']
  ).after(
    new DeletedDirectoryRecursively(as('copiedDir'))
  )
).call();
