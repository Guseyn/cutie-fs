'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class LastChangedTimeInMs extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.ctimeMs;
    }
  }

}

module.exports = LastChangedTimeInMs;
