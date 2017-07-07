'use strict'

const fs = require('fs')

// Never use sync code like this!

const fileName = '../README.md2'

fs.readFile(fileName, (error, fileBuffer) => {
  if (error) return console.error(error)
  const fileString = fileBuffer.toString()
  const lines = fileString.split('\n')
  console.log(lines)
})
