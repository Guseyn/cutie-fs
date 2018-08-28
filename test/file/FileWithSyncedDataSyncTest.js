const {
  as
} = require('@cuties/cutie');
const {
  EqualAssertion
} = require('@cuties/assert');
const {
  OpenedFile,
  FileWithSyncedDataSync,
  ClosedFile
} = require('./../../index');

const file = './test/file/files/test-21.txt';

new FileWithSyncedDataSync(
  new OpenedFile(file, 'r+').as('fd')
).as('synced_fd')
  .after(
    new EqualAssertion(
      as('fd'), as('synced_fd')
    ).after(
      new ClosedFile(as('fd'))
    )
  ).call();
