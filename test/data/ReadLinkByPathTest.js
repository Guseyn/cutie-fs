const file = './test/data/test.txt';
const linkedFile = './test/data/test-link.txt';
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
      new SymLinkedFile(file, linkedFile) 
    ), file
  )

).call();
