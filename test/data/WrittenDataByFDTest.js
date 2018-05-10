const file = './test/data/files/test-10.txt';
const data = 'test buffer';
const assert = require('assert');
const { EqualAssertion } = require('@guseyn/cutie-assert');
const WrittenFile = require('./../../src/file/WrittenFile');
const OpenedFile = require('./../../src/file/OpenedFile');
const WrittenDataByFD = require('./../../src/data/WrittenDataByFD');

new EqualAssertion(
  new WrittenDataByFD(
    new OpenedFile(
      new WrittenFile(file, ''), 'w+'
    ), data
  ), data
).call();
