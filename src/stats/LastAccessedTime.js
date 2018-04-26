'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is time
class LastAccessedTime extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.atime;
    }
  }

}

module.exports = LastAccessedTime;
