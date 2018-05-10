const file = './test/data/files/test-9.txt';
const data = 'test buffer';
const assert = require('assert');
const { EqualAssertion } = require('@guseyn/cutie-assert');
const WrittenFile = require('./../../src/file/WrittenFile');
const OpenedFile = require('./../../src/file/OpenedFile');
const WrittenDataByFDSync = require('./../../src/data/WrittenDataByFDSync');

new EqualAssertion(
  new WrittenDataByFDSync(
    new OpenedFile(
      new WrittenFile(file, ''), 'w+'
    ), data
  ), data
).call();
