'use strict'

const {
  as
} = require('@cuties/cutie');
const {
  EqualAssertion
} = require('@cuties/assert');
const {
  FileWithChangedOwnerByPath,
  StatsByPath,
  Uid,
  Gid
} = require('./../../index');

const file = './test/file/files/test-12.txt';

new StatsByPath(
  file
).as('stats')
  .after(
    new EqualAssertion(
      new FileWithChangedOwnerByPath(
        file, 
        new Uid(as('stats')).as('uid'), 
        new Gid(as('stats')).as('gid')
      ), file
    ).after(
      new EqualAssertion(
        new Uid(new StatsByPath(file)), as('uid')
      ).after(
        new EqualAssertion(
          new Gid(new StatsByPath(file)), as('gid')
        )
      )
    )
  ).call();
