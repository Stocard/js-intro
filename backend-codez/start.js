

const config = {
  port : process.env.PORT || 5000,
  public_host : process.env.PUBLIC_HOST || 'http://localhost'
}

const server = require('./lib/index.js').create(config)
server.listen(config.port, function(){
  console.log('server running on %s:%s', config.public_host, config.port)
})
