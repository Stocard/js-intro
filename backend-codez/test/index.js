const assert = require('assert')
const Server = require('../lib/server')
const request = require('request')

const config = {
  port: 5000,
  host: 'http://localhost'
}

describe('lunch backend', ()=>{
  const server = new Server(config)
  before((done) => {
    server.start(done)
  })
  it('should return something on / route', (done)=>{
    request.get({
      url: 'http://localhost:5000/',
      json: true
    }, (err, res, body) =>{
      if(err) return done(err)
      assert.equal(200, res.statusCode)
      done()
    })
  })

})
