'use strict'

const {
  As
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  FileWithChangedOwnerByPath,
  StatsByPath,
  Uid,
  Gid
} = require('./../../index');

const file = './test/file/files/test-12.txt';

new As(
  new StatsByPath(
    file
  ), 'stats'
).after(
  new EqualAssertion(
    new FileWithChangedOwnerByPath(
      file, new As(
        new Uid(
          new As('stats')
        ), 'uid'
      ), new As(
        new Gid(
          new As('stats')
        ), 'gid'
      )
    ), file
  ).after(
    new EqualAssertion(
      new Uid(
        new StatsByPath(
          file
        )
      ), new As('uid')
    ).after(
      new EqualAssertion(
        new Gid(
          new StatsByPath(
            file
          )
        ), new As('gid')
      )
    )
  )
).call();
