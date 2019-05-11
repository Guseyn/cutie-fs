'use strict'

const { ExecutedTests } = require('test-executor')
const testDirs = ['./test/data', './test/file/', './test/files', './test/read-stream', './test/stats', './test/watcher', 'test/write-stream']

const executedTests = (curIndex = 0, curExecutedTests = new ExecutedTests(testDirs[0]), tree = curExecutedTests) => {
  if (curIndex < testDirs.length - 1) {
    curIndex += 1
    const nextExecutedTests = new ExecutedTests(testDirs[curIndex])
    curExecutedTests.after(nextExecutedTests)
    executedTests(curIndex, nextExecutedTests, tree)
  } else {
    tree.call()
  }
}

executedTests()
