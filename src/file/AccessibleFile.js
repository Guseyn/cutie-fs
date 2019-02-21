'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is a file (as path) that is accessible (if not then onError is being invoked)
class AccessibleFile extends AsyncObject {
  constructor (path, mode) {
    super(path, mode || fs.constants.F_OK)
  }

  asyncCall () {
    return (path, mode, callback) => {
      this.file = path
      fs.access(path, mode, callback)
    }
  }

  onErrorAndResult (error) {
    return error || this.file
  }

  continueAfterFail () {
    return true
  }
}

module.exports = AccessibleFile
