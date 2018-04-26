module.exports = {
  BytesReadFromReadStream: require('./src/read-stream/BytesReadFromReadStream'),
  ClosedReadStream: require('./src/read-stream/ClosedReadStream'),
  PathOfReadStream: require('./src/read-stream/PathOfReadStream'),
  ReadStreamWithOpenEvent: require('./src/read-stream/ReadStreamWithOpenEvent'),

  ClosedWatcher: require('./src/watcher/ClosedWatcher'),
  WatcherWithChangeEvent: require('./src/watcher/WatcherWithChangeEvent'),
  WatcherWithErrorEvent: require('./src/watcher/WatcherWithErrorEvent')
}
