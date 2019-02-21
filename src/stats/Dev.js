'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Dev extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.dev
    }
  }
}

module.exports = Dev
