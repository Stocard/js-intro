var request = require('request')
var assert = require('assert')
const config = {
  public_host: 'http://localhost',
  port: 5000
}

describe('Lunch API', function() {
  var server = require('../lib/index').create(config)
  before(function(done) {
    server.listen(config.port, done)
  })
  it('should get / route', function(done) {
    request.get({
      url: config.public_host + ':' + config.port + '/',
      json: true
    }, function(err, res, body) {
      if (err) return done(err)
      assert.equal(res.statusCode, 200)
      done()
    })
  })

  it('should store lunches', function(done) {
    request.post({
      url: config.public_host + ':' + config.port + '/lunches',
      json: {"lunch": "apples"}
    }, function(err, res, body) {
      if (err) return done(err)
      assert.equal(res.statusCode, 201)
      request.get({
        url: config.public_host + ':' + config.port + '/lunches',
        json: true
      }, function(err, res, body) {
        if (err) return done(err)
        assert.deepEqual(res.body, {lunches: ["apples"]})
        done()
      })
    })
  })

  it('should store multiple lunches', function(done) {
    request.post({
      url: config.public_host + ':' + config.port + '/lunches',
      json: {"lunch": "pie"}
    }, function(err, res, body) {
      if (err) return done(err)
      assert.equal(res.statusCode, 201)
      request.post({
        url: config.public_host + ':' + config.port + '/lunches',
        json: {"lunch": "burgers"}
      }, function(err, res, body) {
        if (err) return done(err)
        assert.equal(res.statusCode, 201)
        request.get({
          url: config.public_host + ':' + config.port + '/lunches',
          json: true
        }, function(err, res, body) {
          if (err) return done(err)
          assert.deepEqual(res.body, {lunches: ["apples", "pie", "burgers"]})
          done()
        })
      })
    })
  })

  it('should return error for bad requests', function(done) {
    request.post({
      url: config.public_host + ':' + config.port + '/lunches',
      json: {"dinner": "fritten"}
    }, function(err, res, body) {
      if (err) return done(err)
      assert.equal(res.statusCode, 400)
      done()
    })
  })



})
