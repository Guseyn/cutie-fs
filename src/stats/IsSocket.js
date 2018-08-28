'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is boolean
class IsSocket extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.isSocket();
    }
  }

}

module.exports = IsSocket;
