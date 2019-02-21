'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const fs = require('fs')

// Represented result is a file (as path) that is accessible (if not then onError is being invoked)
class AccessibleFileSync extends AsyncObject {
  constructor (path, mode) {
    super(path, mode || fs.constants.F_OK)
  }

  syncCall () {
    return (path, mode) => {
      fs.accessSync(path, mode)
      return path
    }
  }

  onErrorAndResult (error, file) {
    return error || file
  }

  continueAfterFail () {
    return true
  }
}

module.exports = AccessibleFileSync
