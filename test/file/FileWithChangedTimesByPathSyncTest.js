'use strict'

const {
  as
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

new StatsByPath(
  new FileWithChangedTimesByPathSync(
    file,
    new Date().as('atime'),
    new Date().as('mtime')
  )
).as('stats')
  .after(
    new EqualAssertion(
      new DateString(
        new LastAccessedTime(
          as('stats')
        ).as('new_atime') 
      ),
      new DateString(
        as('atime')
      )
    ).after(
      new EqualAssertion(
        new TimeString(
          as('new_atime')
        ), new TimeString(
          as('atime')
        )
      ).after(
        new EqualAssertion(
          new DateString(
            new LastModifiedTime(
              as('stats')
            ).as('new_mtime')
          
          ), new DateString(
            as('mtime')
          )
        ).after(
          new EqualAssertion(
            new TimeString(
              as('new_mtime')
            ), new TimeString(
              as('mtime')
            )
          )
        )
      )
    )
  ).call();
