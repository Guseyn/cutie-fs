const fs = require('fs');

// return object: {fileName1: data1, fileName2: data2, ... } 
const readDataFromFiles = (files, options, callback) => {
  let contents = {};
  let count = 0;
  if (files.length === 0) {
    callback(null, contents);
  }
  files.forEach(file => {
    fs.readFile(file, options, (error, data) => {
      if (error) {
        callback(error);
      } else {
        contents[file] = data;
        count += 1;
        if (count === files.length) {
          callback(null, contents);
        }
      }
    });
  });
}

module.exports = readDataFromFiles;
