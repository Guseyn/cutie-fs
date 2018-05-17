'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represented result is number
class Size extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.size;
    }
  }

}

module.exports = Size;
