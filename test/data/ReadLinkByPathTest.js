'use strict'

const { EqualAssertion } = require('@cuties/assert');
const {
  ReadLinkByPath,
  SymbolicLinkedFile,
  LinkedFile,
  UnlinkedFile,
  WrittenFile
} = require('./../../index');

const file = './test/data/files/test-6.txt';
const linkedFile = './test/data/files/test-link-6.txt';
const data = 'test buffer';

new EqualAssertion(
  new ReadLinkByPath(
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