'use strict'

const fs = require('fs')

// return object: {fileName1: data1, fileName2: data2, ... }
const writtenDataToFiles = (filesWithData, options, callback) => {
  let countObj = { count: 0 }
  const len = Object.keys(filesWithData).length
  if (len === 0) {
    callback(null, filesWithData)
  } else {
    for (let file in filesWithData) {
      ((file) => {
        const data = filesWithData[file]
        fs.writeFile(file, data, options, (error) => {
          if (error) {
            callback(error)
          } else {
            countObj.count += 1
            if (countObj.count === len) {
              callback(null, filesWithData)
            }
          }
        })
      })(file)
    }
  }
}

module.exports = writtenDataToFiles
