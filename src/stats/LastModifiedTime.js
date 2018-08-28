'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is time
class LastModifiedTime extends AsyncObject {

  constructor(stats) {
    super(stats);
  }

  definedSyncCall() {
    return (stats) => {
      return stats.mtime;
    }
  }

}

module.exports = LastModifiedTime;
