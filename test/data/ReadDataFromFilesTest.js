'use strict'

const {
  AsyncObject
} = require('@cuties/cutie');
const {
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  ReadFilesOfDirectoryRecursively,
  ReadDataFromFiles
} = require('./../../index');

const dir = './test/files/dirs/test-dir-3';

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

new DeepEqualAssertion(
  new ReadDataFromFiles(
    new SortedFiles(
      new ReadFilesOfDirectoryRecursively(dir)
    ), {encoding: 'utf8'}
  ), 
  { 
    'test/files/dirs/test-dir-3/test-3-1.txt': 'test31',
    'test/files/dirs/test-dir-3/test-dir-3-1/test-3-1-1.txt': 'test311',
    'test/files/dirs/test-dir-3/test-dir-3-1/test-dir-3-1-1/test-3-1-1-1.txt': 'test3111',
    'test/files/dirs/test-dir-3/test-dir-3-1/test-dir-3-1-1/test-3-1-1-2.txt': 'test3112',
    'test/files/dirs/test-dir-3/test-dir-3-2/test-3-2-1.txt': 'test321',
    'test/files/dirs/test-dir-3/test-dir-3-2/test-3-2-2.txt': 'test322',
    'test/files/dirs/test-dir-3/test-dir-3-2/test-dir-3-2-1/test-3-2-1-1.txt': 'test3211',
    'test/files/dirs/test-dir-3/test-dir-3-3/test-3-3-1.txt': 'test331',
    'test/files/dirs/test-dir-3/test-dir-3-3/test-3-3-2.txt': 'test332' 
  }
).call();
