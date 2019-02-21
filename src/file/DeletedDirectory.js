'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is file (as path)
class DeletedDirectory extends AsyncObject {
  constructor (path) {
    super(path)
  }

  asyncCall () {
    return (path, callback) => {
      this.file = path
      fs.rmdir(path, callback)
    }
  }

  onResult () {
    return this.file
  }
}

module.exports = DeletedDirectory
