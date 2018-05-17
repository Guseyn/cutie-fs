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
      new As('fd'), new Uid(
        new As('stats')
      ), new Gid(
        new As('stats')
      )
    ), new As('fd')
  )
).call();
