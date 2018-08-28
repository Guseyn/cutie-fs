
'use strict'

const { EqualAssertion } = require('@cuties/assert');
const {
  ReadLinkByPathSync,
  SymbolicLinkedFile,
  LinkedFile,
  UnlinkedFile,
  WrittenFile
} = require('./../../index');

const file = './test/data/files/test-5.txt';
const linkedFile = './test/data/files/test-link-5.txt';
const data = 'test buffer';

new EqualAssertion(
  new ReadLinkByPathSync(
    new SymbolicLinkedFile(
      new WrittenFile(file, data),
      linkedFile
    ) 
  ), file
).after(
  new UnlinkedFile(
    linkedFile
  )
).call();
