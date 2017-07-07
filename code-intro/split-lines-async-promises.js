'use strict'

const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs'))

// Use this :)

const fileName = '../README.md2'

function readReadmeAndLogLines() {
  // Don't forget to return the promise
  return fs.readFileAsync(fileName)
    .then((fileBuffer) => {
      const fileString = fileBuffer.toString()
      return fileString
    })
    .then((fileString) => {
      return splitLines(fileString)
        .then((lines) => {
          console.log(`Found ${lines.length} lines in string ${fileString}`)
          return lines
        })
    })
    .then((lines) => {
      console.log(lines)
      return lines
    })
    // Don't catch if you return the promise
}

// Nearly never required!

// function readFileAsync(fileName) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fileName, (error, fileBuffer) => {
//       if (error) return reject(error)
//       return resolve(fileBuffer)
//     })
//   })
// }

// No need to invoke the Promise constructor!

// function splitLines(text) {
//   return new Promise((resolve, reject) => {
//     if (text === null || text === undefined) {
//       reject('Text should not be empty')
//       return
//     }
//     const lines = text.split('\n')
//     resolve(lines)
//   })
// }

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
  // Don't forget to catch in the end
  .catch((error) => {
    console.error(`ERROR: ${error}`)
  })
