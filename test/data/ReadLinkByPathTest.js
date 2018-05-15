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
const linkedFile = './test/data/files/test-link-6.txt';
const data = 'test buffer';

new EqualAssertion(
  new ReadLinkByPath(
    new SymLinkedFile(
      new WrittenFile(file, data),
      linkedFile
    ) 
  ), file
).after(
  new UnlinkedFile(
    linkedFile
  )
).call();