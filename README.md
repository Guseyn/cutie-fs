# cutie-fs

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for <b>fs</b> module in Node. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-fs/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/fs');
```
For more information about parameters in the async objects visit [docs of Node](https://nodejs.org/en/docs/) for <b>fs</b> module.

## data

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `ReadBufferByFD` | `fs.read` | `fd, buffer, offset, length, position` | `buffer` |
| `ReadBufferByFDSync` | `fs.readSync`  | `fd, buffer, offset, length, position` | `buffer` |
| `ReadDataByPath` | `fs.readFile` | `path, options({encoding: null, flag: 'r'})` | `buffer` or `string` |
| `ReadDataByPathSync` | `fs.readFileSync` | `path, options({encoding: null, flag: 'r'})` | `buffer` or `string` |
| `ReadDataFromFiles` | [readDataFromFiles](https://github.com/Guseyn/cutie-fs/blob/master/src/custom-calls/readDataFromFiles.js) | `files, options({encoding: null, flag: 'r'})` | `object: {fileName1: data1, fileName2: data2, ... }` |
| `ReadLinkByPath` | `fs.readlink` | `path, options('utf8')` | `linkstring` |
| `ReadLinkByPathSync` | `fs.readlinkSync` | `path, options('utf8')` | `linkstring` |
| `WrittenBufferByFD` | `fs.write` | `fd, buffer[, offset[, length[, position]]]` | `buffer` |
| `WrittenDataByFD` | `fs.write` | `fd, string[, position[, encoding]]` | `string` |
| `WrittenDataByFD` | `fs.writeSync` | `fd, string[, position[, encoding]]`| `string` |

## file

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `AccessibleFile` | `fs.access` | `path, mode (fs.constants.F_OK)` | `file(as path)` or `error` |
| `AccessibleFileSync` | `fs.accessSync` | `path, mode(fs.constants.F_OK)` | `file(as path)` or `error` |
| `AppendedFile` | `fs.appendFile` | `file, data, options({encoding: 'utf8', mode: 0o666, flag: 'a'})` | `file` |
| `AppendedFileSync` | `fs.appendFileSync` | `file, data, options({encoding: 'utf8', mode: 0o666, flag: 'a'})` | `file` |
| `ClosedFile` | `fs.close` | `fd` | `file(as fd)` |
| `CopiedFile` | `fs.copyFile` | `src, dest, flags(0)` | `files(as dest)` |
| `CopiedFileSync` | `fs.copyFileSync` | `src, dest, flags(0)` | `files(as dest)` |
| `CreatedDirectory` | `fs.mkdir` | `path, mode(0o777)` | `file(as path)` |
| `CreatedDirectorySync` | `fs.mkdirSync` | `path, mode(0o777)` | `file(as path)` |
| `CreatedTemporaryDirectory` | `fs.mkdtemp` | `prefix, options('utf8')` | `file(dir)` |
| `CreatedTemporaryDirectorySync` | `fs.mkdtempSync` | `prefix, options('utf8')` | `file(dir)` |
| `DeletedDirectory` | `fs.rmdir` | `path` | `file(as path)` |
| `DeletedDirectorySync` | `fs.rmdirSync` | `path` | `file(as path)` |
| `DoesFileExistSync` | `path` | `fs.existsSync` | `boolean` |
| `FileWithChangedOwnerByFD` | `fs.fchown` | `fd, uid, gid` | `file(as fd)` |
| `FileWithChangedOwnerByFDSync` | `fs.fchownSync` | `fd, uid, gid` | `file(as fd)` |
| `FileWithChangedPermissionsByFD` | `fs.fchmod` | `fd, mode` | `file(as fd)` |
| `FileWithChangedPermissionsByFDSync` | `fs.fchmodSync` | `fd, mode` | `file(as fd)` |
| `FileWithChangedPermissionsByPath` | `fs.chmod` | `path, mode` | `file(as path)` |
| `FileWithChangedPermissionsByPathSync` | `fs.chmodSync` | `path, mode` | `file(as path)` |
| `FileWithChangedTimesByFD` | `fs.futimes` | `fd, atime, mtime` | `file(as fd)` |
| `FileWithChangedTimesByFDSync` | `fs.futimesSync` | `fd, atime, mtime` | `file(as fd)` |
| `FileWithChangedTimesByPath` | `fs.utimes` | `path, atime, mtime` | `file(as path)` |
| `FileWithChangedTimesByPathSync` | `fs.utimesSync` | `path, atime, mtime` | `file(as path)` |
| `FileWithSyncedData` | `fs.fdatasync` | `fd` | `file(as fd)` |
| `FileWithSyncedDataSync` | `fs.fdatasyncSync` | `fd` | `file(as fd)` |
| `LinkedFile` | `fs.link` | `existingPath, newPath` | `file(as newPath)` |
| `LinkedFileSync` | `fs.linkSync` | `existingPath, newPath` | `file(as newPath)` |
| `LinkedFileWithChangedOwnerByPath` | `fs.lchown` | `path, uid, gid` | `file(as path)` |
| `LinkedFileWithChangedOwnerByPathSync` | `fs.lchownSync` | `path, uid, gid` | `file(as path)` |
| `LinkedFileWithChangedPermissionsByPath` | `fs.lchmod` | `path, mode` | `file(as path)` |
| `LinkedFileWithChangedPermissionsByPathSync` | `fs.lchmodSync` | `path, mode` | `file(as path)` |
| `OpenedFile` | `fs.open` | `path, flags, mode(0o666)` | `file(as fd)` |
| `OpenedFileSync` | `fs.openSync` | `path, flags, mode(0o666)` | `file(as fd)` |
| `RenamedFile` | `fs.rename` | `oldPath, newPath` | `file(as newPath)` |
| `RenamedFileSync` | `fs.renameSync` | `oldPath, newPath` | `file(as newPath)` |
| `SymbolicLinkedFile` | `fs.symlink` | `target, path, type('file')` | `file(as path)` |
| `SymbolicLinkedFileSync` | `fs.symlinkSync` | `target, path, type('file')` | `file(as path)` |
| `SyncedFile` | `fs.fsync` | `fd` | `file(as fd)` |
| `SyncedFileSync` | `fs.fsyncSync` | `fd` | `file(as fd)` |
| `TruncatedFileByFD` | `fs.ftruncate` | `fd, len(0)` | `file(as fd)` |
| `TruncatedFileByFDSync` | `fs.ftruncateSync` | `fd, len(0)` | `file(as fd)` |
| `UnlinkedFile` | `fs.unlink` | `path` | `file(as path)` |
| `UnlinkedFileSync` | `fs.unlinkSync` | `path` | `file(as path)` |
| `UnwatchedFile` | `fs.unwatchFile` | `fileName, listener` | `file(as fileName)` |
| `WrittenFile` | `fs.writeFile` | `file, data, options({encoding: 'utf8', mode: 0o666, flag: 'w'})` | `file` |
| `WrittenFileSync` | `fs.writeFileSync` | `file, data, options({encoding: 'utf8', mode: 0o666, flag: 'w'})` | `file` |

## files

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `CopiedDirectoryRecursively` | [copiedDirectoryRecursively](https://github.com/Guseyn/cutie-fs/blob/master/src/custom-calls/copiedDirectoryRecursively.js) | `dir, dest, options('utf8')` | `dest` |
| `DeletedDirectoryRecursively` | [deletedDirectoryRecursively](https://github.com/Guseyn/cutie-fs/blob/master/src/custom-calls/deletedDirectoryRecursively.js) | `dir, options('utf8')` | `dir` |
| `ReadFilesOfDirectory` | `fs.readdir` | `path, options('utf8')` | `file[]` |
| `ReadFilesOfDirectorySync` | `fs.readdirSync` | `path, options('utf8')` | `file[]` |
| `ReadFilesOfDirectoryRecursively` | [readFilesOfDirectoryRecursively](https://github.com/Guseyn/cutie-fs/blob/master/src/custom-calls/readFilesOfDirectoryRecursively.js) | `path, options('utf8')` | `file[]` |

## read-stream

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
|  `BytesReadFromReadStream` | `readStream.bytesRead` | `readStream` | the number of bytes read so far |
| `CreatedReadStream` | `fs.createReadStream` | `path, options({flags: 'r', encoding: null, fd: null, mode: 0o666, autoClose: true, highWaterMark: 64 * 1024})` | `ReadStream` |
| `PathOfReadStream` | `readStream.path` | `readStream` | the path to the file the stream is reading |
| `ReadStreamWithCloseEvent` | `readStream.on('close', event)` | `readStream, event(Event with definedBody())` | `readStream` |
| `ReadStreamWithOpenEvent` | `readStream.on('open', event)` | `readStream, event(Event with definedBody(fd)`) | `readStream` |

## stats

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `BirthTime` | `stats.birthtime` | `stats` | `time` |
| `BirthTimeInMs` | `stats.birthtimeMs` | `stats` | `number` |
| `BlkSize` | `stats.blksize` | `stats` | `number` |
| `Blocks` | `stats.blocks` | `stats` | `number` |
| `Dev` | `stats.dev` | `stats` | `number` |
| `Gid` | `stats.gid` | `stats` | `number` |
| `Ino` | `stats.ino` | `stats` | `number` |
| `IsBlockDevice` | `stats.isBlockDevice` | `stats` | `boolean` |
| `IsCharacterDevice` | `stats.isCharacterDevice` | `stats` | `boolean` |
| `IsDirectory` | `stats.isDirectory` | `stats` | `boolean` |
| `IsFIFO` | `stats.isFIFO` | `stats` | `boolean` |
| `IsFile` | `stats.isFile` | `stats` | `boolean` |
| `IsSocket` | `stats.isSocket` | `stats` | `boolean` |
| `IsSymbolicLink` | `stats.isSymbolicLink` | `stats` | `boolean` |
| `LastAccessedTime` | `stats.atime` | `stats` | `time` |
| `LastAccessedTimeInMs` | `stats.atimeMs` | `stats` | `number` |
| `LastChangedTime` | `stats.ctime` | `stats` | `time` |
| `LastChangedTimeInMs` | `stats.ctimeMs` | `stats` | `number` |
| `LastModifiedTime` | `stats.mtime` | `stats` | `time` |
| `LinkedStats` | `fs.lstat` | `path` | `stats` |
| `LinkedStatsSync` | `fs.lstatSync` | `path` | `stats` |
| `Mode` | `stats.mode` | `stats` | `number` |
| `Nlink` | `stats.nlink` | `stats` | `number` |
| `RDev` | `stats.rdev` | `stats` | `rdev` |
| `RealPath` | `stats.realpath` | `path, options('utf8')` | `path` |
| `RealPathSync` | `stats.realpathSync` | `path, options('utf8')` | `path` |
| `Size` | `stats.size` | `stats` | `number` |
| `StatsByFD` | `fs.fstat` | `fd` | `stats` |
| `StatsByFDSync` | `fs.fstatSync` | `fd` | `stats` |
| `StatsByPath` | `fs.stat` | `path` | `stats` |
| `StatsByPathSync` | `fs.statSync` | `path` | `stats` |

## watcher

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `ClosedWatcher` | `watcher.close` | `watcher` | `FSWatcher` |
| `WatcherWithCurrentAndPreviousStatsListener` | `fs.watchFile` | `filename, options({persistent: true, interval: 5007}), listener(Event with definedBody(current, previous))` | `FSWatcher` |
| `WatcherWithErrorEvent` | `watcher.on('error', event)` | `watcher, event(Event with definedBody(error))` | `FSWatcher` |
| `WatcherWithEventTypeAndFilenameListener` | `fs.watch` | `filename, options({persistent: true, recursive: false, encoding: 'utf8'}), listener(Event with definedBody(eventType, filename)`) | `FSWatcher` |

## write-stream

| Async Object  | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `BytesWrittenToWriteStream` | `writeStream.bytesWritten` | `writeStream` | the number of bytes written so far |
| `CreatedWriteStream` | `fs.createWriteStream` | `path, options ({flags: 'w', encoding: 'utf8', fd: null, mode: 0o666, autoClose: true})` | `WriteStream` |
| `PathOfWriteStream` | `writeStream.path` | `writeStream` | the path to the file the stream is writing |
| `WriteStreamWithCloseEvent` | `writeStream.on('close', event)` | `writeStream, event(Event with definedBody())` | `WriteStream` |
| `WriteStreamWithOpenEvent` | `writeStream.on('open', event)` | `writeStream, event(Event with definedBody(fd))` | `WriteStream` |

[npm-image]: https://img.shields.io/npm/v/@cuties/fs.svg
[npm-url]: https://npmjs.org/package/@cuties/fs

