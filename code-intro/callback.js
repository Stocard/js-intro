'use strict'

const fs = require('fs')

const fileName = './README.md'

// fs.readFile(fileName, (error, content) => {
//     if (error) return console.log('ERROR: ' + error)
//     const text = content.toString()
//     console.log('-----')
//     console.log(text)
// })

function splitLines(text, callback) {
  if (text == null) return callback('Error: text parameter empty')
  const lines = text.split('\n')
  callback(null, lines)
}

function doesSomething(callback) {
  // code here
  callback()
}

fs.readFile(fileName, (error, content) => {
  if (error) return console.error('ERROR: ' + error)
  const text = content.toString()
  splitLines(text, (error, lines) => {
    if (error) return console.log('ERROR: ' + error)
    if (lines.length < 10) {
      doesSomething((error, result) => {
        if (error) return console.log('ERROR: ' + error)
        doesSomething((error, result) => {
          if (error) return console.log('ERROR: ' + error)
          doesSomething((error, result) => {
            if (error) return console.log('ERROR: ' + error)
            console.log('-----')
            console.log(lines)
          })
        })
      })
    } else {
      doesSomething((error, result) => {
        if (error) return console.log('ERROR: ' + error)
        console.log('-----')
        console.log(lines)
      })
    }
  })
})
