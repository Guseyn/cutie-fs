'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is number
class BlkSize extends AsyncObject {
  constructor (stats) {
    super(stats)
  }

  syncCall () {
    return (stats) => {
      return stats.blksize
    }
  }
}

module.exports = BlkSize
