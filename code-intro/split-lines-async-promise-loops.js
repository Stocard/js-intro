'use strict'

const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

const fileName = '../README.md'

function readReadmeAndLogLines() {
  return fs.readFileAsync(fileName)
    .then((fileBuffer) => {
      const fileString = fileBuffer.toString()
      return fileString
    })
    .then((fileString) => {
      return splitLines(fileString)
        .then((lines) => {
          console.log(`Found ${lines.length} lines in string with ${fileString.length} characters`)
          return lines
        })
    })
    .filter((line) => {
      return line.length !== 0
    })
    .map((line, index) => {
      console.log(`${index}: ${line}`)
    }, { concurrency: 5 })
}

function splitLines(text) {
  if (text === null || text === undefined) {
    return Promise.reject('Text should not be empty')
  }
  const lines = text.split('\n')
  return Promise.resolve(lines)
}

readReadmeAndLogLines()
  .then((lines) => {
    console.log(`Done, read ${lines.length} lines`)
  })
  .catch((error) => {
    console.error(`ERROR: ${error}`)
  })
