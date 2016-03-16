"use strict"

const restify = require('restify')

class Server{

  constructor(config){
    this.config = config
    this.store = []
  }

  start(cb){
    this.server = restify.createServer({name: 'lunch-service'})
    this.server.use(restify.queryParser())
    this.server.use(restify.authorizationParser())
    this.server.use(restify.bodyParser())

    this.server.get('/', (req, res, next) => {
      const text = req.params.text
      res.send(200, {running: true, you_said: text})
      next()
    })


    // POST: {lunch: "fritten"}
    this.server.post('/lunches', (req,res,next) =>{
      const lunchData = req.body
      if(!lunchData || !lunchData.lunch){
        return next(new restify.BadRequestError('stupid!'))
      }
      this.store.push(lunchData.lunch)
      res.send(201)
      next()
    })

    this.server.get('/lunches', (req,res,next) =>{
      res.send(200, this.store)
      next()
    })

    this.server.get('/secret', this.auth, (req,res,next) =>{
      res.send(200, {secret: '12345678'})
      next()
    })


    this.server.listen(this.config.port, cb)
  }

  auth(req, res, next){
    if(!req.authorization || !req.authorization.basic){
      return next(new restify.BadRequestError('stupid!'))
    }

    const user = req.authorization.basic.username
    const pass = req.authorization.basic.password

    if(user != 'flo' || pass != 'hans'){
      return next(new restify.UnauthorizedError('go away'))
    }

    next()
  }

}

module.exports = Server
