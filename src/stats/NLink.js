'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class NLink extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.nlink
    }
  }
}

module.exports = NLink
