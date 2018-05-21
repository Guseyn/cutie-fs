const {
  as
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  OpenedFile,
  FileWithSyncedData
} = require('./../../index');

const file = './test/file/files/test-22.txt';

new FileWithSyncedData(
  new OpenedFile(file, 'r+').as('fd')
).as('synced_fd')
  .after(
    new EqualAssertion(as('fd'), as('synced_fd'))
  ).call();
