'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is file (as linkstring)
class LinkedFileSync extends AsyncObject {
  constructor (existingPath, newPath) {
    super(existingPath, newPath)
  }

  syncCall () {
    return (existingPath, newPath) => {
      fs.linkSync(existingPath, newPath)
      return newPath
    }
  }
}

module.exports = LinkedFileSync
