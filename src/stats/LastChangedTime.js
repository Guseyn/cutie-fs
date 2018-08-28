'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is time
class LastChangedTime extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.ctime;
    }
  }

}

module.exports = LastChangedTime;
