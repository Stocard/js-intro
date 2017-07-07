'use strict'

const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

// Use this :)

const fileName = '../README.md'

async function readReadmeAndLogLines() {

  const fileBuffer = yield fs.readFileAsync(fileName)
  const fileString = fileBuffer.toString()
  const lines = yield splitLines(fileString)
  console.log(`Found ${lines.length} lines in string ${fileString}`)
  return lines
}

async function splitLines(text) {

  if (text === null || text === undefined) {
    return Promise.reject('Text should not be empty')
  }
  const lines = text.split('\n')
  return Promise.resolve(lines)
}

try {
  const lines = yield readReadmeAndLogLines()
  console.log(`Done, read ${lines.length} lines`)
} catch (error) {
  console.error(`ERROR: ${error}`)
}
