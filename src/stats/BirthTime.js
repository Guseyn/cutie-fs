'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is time
class BirthTime extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.birthtime;
    }
  }

}

module.exports = BirthTime;
