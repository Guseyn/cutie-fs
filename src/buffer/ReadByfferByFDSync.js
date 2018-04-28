'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

// Represents buffer
class ReadBufferByFDSync extends AsyncObject {

  constructor(fd, buffer, offset, length, position) {
    super(fd, buffer, offset, length, position);
  }

  definedSyncCall() {
    return (fd, buffer, offset, length, position) => {
      fs.readSync(fd, buffer, offset, length, position);
      return buffer;
    }
  }

}

module.exports = ReadBufferByFDSync;
