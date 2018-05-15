
'use strict'

const { EqualAssertion } = require('@guseyn/cutie-assert');
const {
  ReadLinkByPathSync,
  SymLinkedFile,
  LinkedFile,
  UnlinkedFile,
  WrittenFile
} = require('./../../index');

const file = './test/data/files/test-5.txt';
const linkedFile = './test/data/files/test-link-5.txt';
const data = 'test buffer';

new EqualAssertion(
  new ReadLinkByPathSync(
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
