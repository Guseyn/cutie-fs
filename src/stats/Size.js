'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class Size extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.size
    }
  }
}

module.exports = Size
