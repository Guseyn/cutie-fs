'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  EqualAssertion
} = require('@cuties/assert');
const {
  FileWithChangedOwnerByFDSync,
  OpenedFile,
  StatsByFD,
  Uid,
  Gid,
  ClosedFile
} = require('./../../index');

const file = './test/file/files/test-9.txt';

new StatsByFD(
  new OpenedFile(
    file, 'r+'
  ).as('fd')
).as('stats')
  .after(
    new EqualAssertion(
      new FileWithChangedOwnerByFDSync(
        as('fd'), 
        new Uid(as('stats')).as('uid'),
        new Gid(as('stats')).as('gid')
      ), as('fd')
    ).after(
      new EqualAssertion(
        new Uid(new StatsByFD(as('fd'))), as('uid')
      ).after(
        new EqualAssertion(
          new Gid(new StatsByFD(as('fd'))), as('gid')
        ).after(
          new ClosedFile(as('fd'))
        ) 
      )
    )
  ).call();
