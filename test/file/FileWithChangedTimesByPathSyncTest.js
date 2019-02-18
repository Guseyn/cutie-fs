'use strict'

const {
  as
} = require('@cuties/cutie')
const {
  StrictEqualAssertion
} = require('@cuties/assert')
const {
  Date,
  DateString,
  TimeString
} = require('@cuties/date')
const {
  FileWithChangedTimesByPathSync,
  StatsByPath,
  LastAccessedTime,
  LastModifiedTime
} = require('./../../index')

const file = './test/file/files/test-19.txt'

new StatsByPath(
  new FileWithChangedTimesByPathSync(
    file,
    new Date().as('atime'),
    new Date().as('mtime')
  )
).as('stats')
  .after(
    new StrictEqualAssertion(
      new DateString(
        new LastAccessedTime(
          as('stats')
        ).as('new_atime')
      ),
      new DateString(
        as('atime')
      )
    ).after(
      new StrictEqualAssertion(
        new TimeString(
          as('new_atime')
        ), new TimeString(
          as('atime')
        )
      ).after(
        new StrictEqualAssertion(
          new DateString(
            new LastModifiedTime(
              as('stats')
            ).as('new_mtime')

          ), new DateString(
            as('mtime')
          )
        ).after(
          new StrictEqualAssertion(
            new TimeString(
              as('new_mtime')
            ), new TimeString(
              as('mtime')
            )
          )
        )
      )
    )
  ).call()
