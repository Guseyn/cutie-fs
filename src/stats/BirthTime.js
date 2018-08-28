'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

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
