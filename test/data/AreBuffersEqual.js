'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

class AreBuffersEqual extends AsyncObject {

  constructor(buf1, buf2) {
    super(buf1, buf2);
  }

  definedSyncCall() {
    return (buf1, buf2) => {
      return buf1.equals(buf2);
    }
  }

  onResult(areEqual) {
    return areEqual;
  }

}

module.exports = AreBuffersEqual;
