'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is number
class Blocks extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.blocks;
    }
  }

}

module.exports = Blocks;
