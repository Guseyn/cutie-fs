'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class BirthTimeInMs extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.birthtimeMs;
    }
  }

}

module.exports = BirthTimeInMs;