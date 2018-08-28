'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class LastAccessedTimeInMs extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.atimeMs;
    }
  }

}

module.exports = LastAccessedTimeInMs;
