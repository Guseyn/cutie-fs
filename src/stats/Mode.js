'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Mode extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.mode
    }
  }
}

module.exports = Mode
