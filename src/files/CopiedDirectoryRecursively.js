'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject
const copiedDirectoryRecursively = require('./../custom-calls/copiedDirectoryRecursively')

// Represented result is dest
class CopiedDirectoryRecursively extends AsyncObject {
  constructor (dir, dest, options) {
    super(dir, dest, options || 'utf8')
  }

  asyncCall () {
    return copiedDirectoryRecursively
  }
}

module.exports = CopiedDirectoryRecursively
