module.exports = {

  BytesReadFromReadStream: require('./src/read-stream/BytesReadFromReadStream'),
  ClosedReadStream: require('./src/read-stream/ClosedReadStream'),
  PathOfReadStream: require('./src/read-stream/PathOfReadStream'),
  ReadStreamWithOpenEvent: require('./src/read-stream/ReadStreamWithOpenEvent'),

  BirthTime: require('./src/stats/BirthTime'),
  IsBlockDevice: require('./src/stats/IsBlockDevice'),
  IsCharacterDevice: require('./src/stats/IsCharacterDevice'),
  IsDirectory: require('./src/stats/IsDirectory'),
  IsFIFO: require('./src/stats/IsFIFO'),
  IsFile: require('./src/stats/IsFile'),
  IsSocket: require('./src/stats/IsSocket'),
  IsSymbolicLink: require('./src/stats/IsSymbolicLink'),
  LastAccessedTime: require('./src/stats/LastAccessedTime'),
  LastChangedTime: require('./src/stats/LastChangedTime'),
  LastModifiedTime: require('./src/stats/LastModifiedTime'),

  ClosedWatcher: require('./src/watcher/ClosedWatcher'),
  WatcherWithChangeEvent: require('./src/watcher/WatcherWithChangeEvent'),
  WatcherWithErrorEvent: require('./src/watcher/WatcherWithErrorEvent')

}
