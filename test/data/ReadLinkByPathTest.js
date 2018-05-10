const file = './test/data/files/test-6.txt';
const linkedFile = './test/data/test-link-6.txt';
const data = 'test buffer';
const assert = require('assert');
const { EqualAssertion } = require('@guseyn/cutie-assert');
const ReadLinkByPath = require('./../../src/data/ReadLinkByPath');
const SymLinkedFile = require('./../../src/file/SymLinkedFile');
const LinkedFile = require('./../../src/file/LinkedFile');
const UnlinkedFile = require('./../../src/file/UnlinkedFile');
const WrittenFile = require('./../../src/file/WrittenFile');

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
