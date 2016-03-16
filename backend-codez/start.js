"use strict"

const config = {
  port: process.env.PORT || 5000,
  host: process.env.HOST || 'http://localhost'
}

const Server = require('./lib/server')
const server = new Server(config)

server.start(() => {
  console.log('server running')
})
