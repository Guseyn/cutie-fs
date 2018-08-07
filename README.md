# cutie-fs

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for fs module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

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
|  |  |  |  |
|  |  |  |  |

[npm-image]: https://img.shields.io/npm/v/@guseyn/cutie-fs.svg
[npm-url]: https://npmjs.org/package/@guseyn/cutie-fs

# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-fs/tree/master/test)

