'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class LastModifiedTimeInMs extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.mtimeMs;
    }
  }

}

module.exports = LastModifiedTimeInMs;
