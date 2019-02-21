'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is time
class LastAccessedTime extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.atime
    }
  }
}

module.exports = LastAccessedTime
