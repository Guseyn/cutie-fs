'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class Dev extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.dev;
    }
  }

}

module.exports = Dev;
