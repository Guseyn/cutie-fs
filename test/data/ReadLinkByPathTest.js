'use strict'

const { EqualAssertion } = require('@guseyn/cutie-assert');
const {
  ReadLinkByPath,
  SymLinkedFile,
  LinkedFile,
  UnlinkedFile,
  WrittenFile
} = require('./../../index');

const file = './test/data/files/test-6.txt';
const linkedFile = './test/data/test-link-6.txt';
const data = 'test buffer';

// after test (clean up removing file on link)
new UnlinkedFile(
  new WrittenFile (
    linkedFile, '...'
  ),
  
  // test as itself
  new EqualAssertion(
    new ReadLinkByPath(
      new SymLinkedFile(
        new WrittenFile(file, data),
        linkedFile
      ) 
    ), file
  )

).call();
