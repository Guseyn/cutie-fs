'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class Gid extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.gid;
    }
  }

}

module.exports = Gid;
