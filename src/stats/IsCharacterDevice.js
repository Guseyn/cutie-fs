'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is boolean
class IsCharacterDevice extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.isCharacterDevice()
    }
  }
}

module.exports = IsCharacterDevice
