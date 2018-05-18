'use strict'

const {
  As
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  FileWithChangedOwnerByFDSync,
  OpenedFile,
  StatsByFD,
  Uid,
  Gid
} = require('./../../index');

const file = './test/file/files/test-9.txt';

new As(
  new StatsByFD(
    new As(
      new OpenedFile(
        file, 'r+'
      ), 'fd'
    )
  ), 'stats'
).after(
  new EqualAssertion(
    new FileWithChangedOwnerByFDSync(
      new As('fd'), new As(
        new Uid(
          new As('stats')
        ), 'uid'
      ), new As(
        new Gid(
          new As('stats')
        ), 'gid'
      )
    ), new As('fd')
  ).after(
    new EqualAssertion(
      new Uid(
        new StatsByFD(
          new As('fd')
        )
      ), new As('uid')
    ).after(
      new EqualAssertion(
        new Gid(
          new StatsByFD(
            new As('fd')
          )
        ), new As('gid')
      )
    )
  )
).call();
