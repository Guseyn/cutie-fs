'use strict'

const {
  as
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  FileWithChangedOwnerByFD,
  OpenedFile,
  StatsByFD,
  Uid,
  Gid
} = require('./../../index');

const file = './test/file/files/test-10.txt';

new StatsByFD(
  new OpenedFile(
    file, 'r+'
  ).as('fd')
).as('stats')
  .after(
    new EqualAssertion(
      new FileWithChangedOwnerByFD(
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
        )
      )
    )
  ).call();
