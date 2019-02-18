'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  FileWithChangedOwnerByFDSync,
  OpenedFile,
  StatsByFD,
  Uid,
  Gid,
  ClosedFile
} = require('./../../index')

const file = './test/file/files/test-9.txt'

new StatsByFD(
  new OpenedFile(
    file, 'r+'
  ).as('fd')
).as('stats')
  .after(
    new StrictEqualAssertion(
      new FileWithChangedOwnerByFDSync(
        as('fd'),
        new Uid(as('stats')).as('uid'),
        new Gid(as('stats')).as('gid')
      ), as('fd')
    ).after(
      new StrictEqualAssertion(
        new Uid(new StatsByFD(as('fd'))), as('uid')
      ).after(
        new StrictEqualAssertion(
          new Gid(new StatsByFD(as('fd'))), as('gid')
        ).after(
          new ClosedFile(as('fd'))
        )
      )
    )
  ).call()
