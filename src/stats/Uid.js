'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Uid extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.uid
    }
  }
}

module.exports = Uid
