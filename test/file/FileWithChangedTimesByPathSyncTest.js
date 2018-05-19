'use strict'

const {
  As
} = require('@guseyn/cutie');
const {
  EqualAssertion
} = require('@guseyn/cutie-assert');
const {
  Date,
  DateString,
  TimeString
} = require('@guseyn/cutie-date');
const {
  FileWithChangedTimesByPathSync,
  StatsByPath,
  LastAccessedTime,
  LastModifiedTime
} = require('./../../index');

const file = './test/file/files/test-19.txt';

new As(
  new StatsByPath(
    new FileWithChangedTimesByPathSync(
      file,
      new As(
        new Date(), 'atime'
      ),
      new As(
        new Date(), 'mtime'
      )
    ), file
  ), 'stats'
).after(
  new EqualAssertion(
    new DateString(
      new As(
        new LastAccessedTime(
          new As('stats')
        ), 'new_atime'
      )
    ), new DateString(
      new As('atime')
    )
  ).after(
    new EqualAssertion(
      new TimeString(
        new As('new_atime')
      ), new TimeString(
        new As('atime')
      )
    ).after(
      new EqualAssertion(
        new DateString(
          new As(
            new LastModifiedTime(
              new As('stats')
            ), 'new_mtime'
          )
        ), new DateString(
          new As('mtime')
        )
      ).after(
        new EqualAssertion(
          new TimeString(
            new As('new_mtime')
          ), new TimeString(
            new As('mtime')
          )
        )
      )
    )
  )
).call();
