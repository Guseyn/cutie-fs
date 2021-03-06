'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class RDev extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.rdev
    }
  }
}

module.exports = RDev
