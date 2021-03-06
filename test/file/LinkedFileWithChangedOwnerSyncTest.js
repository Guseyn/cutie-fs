'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  SymbolicLinkedFile,
  LinkedFileWithChangedOwnerSync,
  UnlinkedFile,
  LinkedStats,
  Uid,
  Gid
} = require('./../../index')

const file = './test/file/files/test-25.txt'
const newFile = './test/file/files/linked-test-25.txt'

new LinkedStats(
  new SymbolicLinkedFile(file, newFile)
).as('stats')
  .after(
    new StrictEqualAssertion(
      new LinkedFileWithChangedOwnerSync(
        newFile,
        new Uid(as('stats')).as('uid'),
        new Gid(as('stats')).as('gid')
      ), newFile
    ).after(
      new StrictEqualAssertion(
        new Uid(new LinkedStats(file)), as('uid')
      ).after(
        new StrictEqualAssertion(
          new Gid(new LinkedStats(file)), as('gid')
        ).after(
          new UnlinkedFile(newFile)
        )
      )
    )
  ).call()
