'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class BlkSize extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.blksize;
    }
  }

}

module.exports = BlkSize;
