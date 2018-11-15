const fs = require('fs');
const path = require('path');

// returns array of dir(root)
const copiedDirectoryRecursively = (dir, dest, options, callback, copyingDirs, dirsCountObj) => {
  copyingDirs = copyingDirs || [];
  dirsCountObj = dirsCountObj || { count: 1 };
  copyingDirs.push(dest);
  fs.mkdir(dest, (error) => {
    if (error) {
      callback(error);
    } else {
      fs.readdir(dir, options, (error, files) => {
        if (error) {
          callback(error);
        } else {
          let filesCountObj = { count: 0 };
          if (files.length === 0) {
            dirsCountObj.count -= 1;
            if (dirsCountObj.count === 0) {
              callback(null, copyingDirs[0]);
            }
          }
          files.forEach(file => {
            ((file) => {
              let fullFilePath = path.join(dir, file);
              let destFullFilePath = path.join(dest, file);
              fs.stat(fullFilePath, (error, stats) => {
                if (error) {
                  callback(error);
                } else {
                  filesCountObj.count += 1;
                  if (stats.isDirectory()) {
                    dirsCountObj.count += 1;
                    if (filesCountObj.count === files.length) {
                      dirsCountObj.count -= 1;
                    }
                    copiedDirectoryRecursively(fullFilePath, destFullFilePath, options, callback, copyingDirs, dirsCountObj);
                  } else if (stats.isFile()) {
                    fs.copyFile(fullFilePath, destFullFilePath, (error) => {
                      if (error) {
                        callback(error);
                      } else {
                        if (filesCountObj.count === files.length) {
                          dirsCountObj.count -= 1;
                          if (dirsCountObj.count === 0) {
                            callback(null, copyingDirs[0]);
                          }
                        }
                      }
                    });
                  }
                }
              });
            })(file);
          });
        }
      });
    }
  })
}

module.exports = copiedDirectoryRecursively;
