# cutie-fs

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for fs module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-fs/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@guseyn/cutie-fs');
```

| Async Object  | Async/sync call | Parameters | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| ReadBufferByFD | `fs.read` | fd, buffer, offset, length, position | buffer |
| ReadBufferByFDSync | `fs.readSync`  | fd, buffer, offset, length, position | buffer |
| ReadDataByPath | `fs.readFile` | path, options ({encoding: null, flag: 'r'}) | buffer or string |
| ReadDataByPathSync | `fs.readFileSync` | path, options ({encoding: null, flag: 'r'}) | buffer or string |
| ReadLinkByPath | `fs.readlink` | path, options ('utf8') | linkstring |
| ReadLinkByPathSync | `fs.readlinkSync` | path, options ('utf8') | linkstring |
| WrittenBufferByFD | `fs.write` | fd, buffer [, offset[, length[, position]]] | buffer |
| WrittenBufferByFDSync | `fs.writeSync` | fd, buffer [, offset[, length[, position]]] | buffer |
| WrittenDataByFD | `fs.write` | fd, string [, position[, encoding]]| string |
| WrittenDataByFD | `fs.writeSync` | fd, string [, position[, encoding]]| string |
| AccessibleFile | `fs.access` | path, mode (fs.constants.F_OK) | file (as path) or error |
| AccessibleFileSync | `fs.accessSync` | path, mode (fs.constants.F_OK) | file (as path) or error |
| AppendedFile | `fs.appendFile` | file, data, options({encoding: 'utf8', mode: 0o666, flag: 'a'}) | file |
| AppendedFileSync | `fs.appendFileSync` | file, data, options({encoding: 'utf8', mode: 0o666, flag: 'a'}) | file |
| ClosedFile | `fs.close` | fd | file (as fd) |
| ClosedFileSync | `fs.closeSync` | fd | file (as fd) |
| CopiedFile | `fs.copyFile` | src, dest, flags(0) | files (as dest) |
| CopiedFileSync | `fs.copyFileSync` | src, dest, flags(0) | files (as dest) |
| CreatedDirectory | `fs.mkdir` | path, mode(0o777) | file (as path) |
| CreatedDirectorySync | `fs.mkdirSync` | path, mode(0o777) | file (as path) |
| CreatedTemporaryDirectory | `fs.mkdtemp` | prefix, options('utf8') | file (dir) |
| CreatedTemporaryDirectorySync | `fs.mkdtempSync` | prefix, options('utf8') | file (dir) |
| DeletedDirectory | `fs.rmdir` | path | file (as path) |
| DeletedDirectorySync | `fs.rmdirSync` | path | file (as path) |
| DoesFileExistSync | path | fs.existsSync | boolean |
| FileWithChangedOwnerByFD | `fs.fchown` | fd, uid, gid | file (as fd) |
| FileWithChangedOwnerByFDSync | `fs.fchownSync` | fd, uid, gid | file (as fd) |
| FileWithChangedPermissionsByFD | `fs.fchmod` | fd, mode | file (as fd) |
| FileWithChangedPermissionsByFDSync | `fs.fchmodSync` | fd, mode | file (as fd) |
| FileWithChangedPermissionsByPath | `fs.chmod` | path, mode | file (as path) |
| FileWithChangedPermissionsByPathSync | `fs.chmodSync` | path, mode | file (as path) |
| FileWithChangedTimesByFD | `fs.futimes` | fd, atime, mtime | file (as fd) |
| FileWithChangedTimesByFDSync | `fs.futimesSync` | fd, atime, mtime | file (as fd) |
| FileWithChangedTimesByPath | `fs.utimes` | path, atime, mtime | file (as path) |
| FileWithChangedTimesByPathSync | `fs.utimesSync` | path, atime, mtime | file (as path) |
| FileWithSyncedData | `fs.fdatasync` | fd | file (as fd) |
| FileWithSyncedDataSync | `fs.fdatasyncSync` | fd | file (as fd) |
| LinkedFile | `fs.link` | existingPath, newPath | file (as newPath) |
| LinkedFileSync | `fs.linkSync` | existingPath, newPath | file (as newPath) |
| LinkedFileWithChangedOwnerByPath | `fs.lchown` | path, uid, gid | file (as path) |
| LinkedFileWithChangedOwnerByPathSync | `fs.lchownSync` | path, uid, gid | file (as path) |
| LinkedFileWithChangedPermissionsByPath | `fs.lchmod` | path, mode | file (as path) |
| LinkedFileWithChangedPermissionsByPathSync | `fs.lchmodSync` | path, mode | file (as path) |
| OpenedFile | `fs.open` | path, flags, mode(0o666) | file (as fd) |
| OpenedFileSync | `fs.openSync` | path, flags, mode(0o666) | file (as fd) |
| RenamedFile | `fs.rename` | oldPath, newPath | file (as newPath) |
| RenamedFileSync | `fs.renameSync` | oldPath, newPath | file (as newPath) |
| SymbolicLinkedFile | `fs.symlink` | target, path, type('file') | file (as path) |
| SymbolicLinkedFileSync | `fs.symlinkSync` | target, path, type('file') | file (as path) |
| SyncedFile | `fs.fsync` | fd | file (as fd) |
| SyncedFileSync | `fs.fsyncSync` | fd | file (as fd) |
| TruncatedFileByFD | `fs.ftruncate` | fd, len(0) | file (as fd) |
| TruncatedFileByFDSync | `fs.ftruncateSync` | fd, len(0) | file (as fd) |
| UnlinkedFile | `fs.unlink` | path | file (as path) |
| UnlinkedFileSync | `fs.unlinkSync` | path | file (as path) |
| UnwatchedFile | `fs.unwatchFile` | fileName, listener | file (as fileName) |
| WrittenFile | `fs.writeFile` | file, data, options({encoding: 'utf8', mode: 0o666, flag: 'w'}) | file |
| WrittenFileSync | `fs.writeFileSync` | file, data, options({encoding: 'utf8', mode: 0o666, flag: 'w'}) | file |


[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-fs.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-fs

