'use strict'

const {
  AsyncObject, as
} = require('@cuties/cutie');
const {
  Assertion,
  DeepEqualAssertion
} = require('@cuties/assert');
const {
  Is,
  IsNumber,
  IsBoolean,
  IsString
} = require('@cuties/is');
const {
  OpenedFile,
  ClosedFile,
  BirthTime,
  BirthTimeInMs,
  BlkSize,
  Blocks,
  Dev,
  Gid,
  Ino,
  IsBlockDevice,
  IsCharacterDevice,
  IsDirectory,
  IsFIFO,
  IsFile,
  IsSocket,
  IsSymbolicLink,
  LastAccessedTime,
  LastAccessedTimeInMs,
  LastChangedTime,
  LastChangedTimeInMs,
  LastModifiedTime,
  LastModifiedTimeInMs,
  LinkedStats,
  LinkedStatsSync,
  Mode,
  NLink,
  RDev,
  RealPath,
  RealPathSync,
  Size,
  StatsByFD,
  StatsByFDSync,
  StatsByPath,
  StatsByPathSync,
  Uid
} = require('./../../index');

const file = './test/stats/test-file.txt';

class StatsAssertions extends AsyncObject {

  constructor(...assertions) {
    super(...assertions);
  }

  definedSyncCall() {
    return (...assertions) => {
      return true;
    }
  }

}

new StatsByFD(
  new OpenedFile(file, 'r+').as('fd')
).as('stats').after(
  new StatsAssertions(
    new Assertion(
      new Is(
        new BirthTime(as('stats')),
        Date
      )
    ),
    new Assertion(
      new IsNumber(
        new BirthTimeInMs(as('stats'))
      )
    ),
    new Assertion(
      new IsNumber(
        new BlkSize(as('stats'))
      )
    ),
    new Assertion(
      new IsNumber(
        new Blocks(as('stats'))
      )
    ),
    new Assertion(
      new IsNumber(
        new Dev(as('stats'))
      )
    ),
    new Assertion(
      new IsNumber(
        new Gid(as('stats'))
      )
    ),
    new Assertion(
      new IsNumber(
        new Ino(as('stats'))
      )
    ),
    new Assertion(
      new IsBoolean(
        new IsBlockDevice(as('stats'))
      )
    ),
    new Assertion(
      new IsBoolean(
        new IsCharacterDevice(as('stats'))
      )
    ),
    new Assertion(
      new IsBoolean(
        new IsDirectory(as('stats'))
      )
    ),
    new Assertion(
      new IsBoolean(
        new IsFIFO(as('stats'))
      )
    ),
    new Assertion(
      new IsBoolean(
        new IsFile(as('stats'))
      )
    ),
    new Assertion(
      new IsBoolean(
        new IsSocket(as('stats'))
      )
    ),
    new Assertion(
      new IsBoolean(
        new IsSymbolicLink(as('stats'))
      )
    ),
    new Assertion(
      new Is(
        new LastAccessedTime(as('stats')), Date
      )
    ),
    new Assertion(
      new IsNumber(
        new LastAccessedTimeInMs(as('stats'))
      )
    ),
    new Assertion(
      new Is(
        new LastChangedTime(as('stats')), Date
      )
    ),
    new Assertion(
      new IsNumber(
        new LastChangedTimeInMs(as('stats'))
      )
    ),
    new Assertion(
      new Is(
        new LastModifiedTime(as('stats')), Date
      )
    ),
    new Assertion(
      new IsNumber(
        new LastModifiedTimeInMs(as('stats'))
      )
    ),
    new DeepEqualAssertion(
      new LinkedStats(file), as('stats')
    ),
    new DeepEqualAssertion(
      new LinkedStatsSync(file), as('stats')
    ),
    new Assertion(
      new IsNumber(
        new Mode(as('stats'))
      )
    ),
    new Assertion(
      new IsNumber(
        new NLink(as('stats'))
      )
    ),
    new Assertion(
      new IsNumber(
        new RDev(as('stats'))
      )
    ),
    new Assertion(
      new IsString(
        new RealPath(file)
      )
    ),
    new Assertion(
      new IsString(
        new RealPathSync(file)
      )
    ),
    new Assertion(
      new IsNumber(
        new Size(as('stats'))
      )
    ),
    new DeepEqualAssertion(
      new BirthTime(
        new StatsByFDSync(as('fd'))
      ), new BirthTime(
        as('stats')
      )
    ),
    new DeepEqualAssertion(
      new BirthTime(
        new StatsByPath(file)
      ), new BirthTime(
        as('stats')
      )
    ),
    new DeepEqualAssertion(
      new BirthTime(
        new StatsByPathSync(file)
      ), new BirthTime(
        as('stats')
      )
    ),
    new Assertion(
      new IsNumber(
        new Uid(as('stats'))
      )
    )
  ).after(
    new ClosedFile(as('fd'))
  )
).call();

