'use strict'

const fs = require('fs')

// Never use sync code like this!

const fileName = '../README.md'

const content = fs.readFileSync(fileName).toString()
const lines = content.split('\n')
console.log(lines)
