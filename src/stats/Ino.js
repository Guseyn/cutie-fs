'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class Ino extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.ino;
    }
  }

}

module.exports = Ino;
