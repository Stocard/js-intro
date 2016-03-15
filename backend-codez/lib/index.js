const restify = require('restify')

module.exports = {
  create: create
}


function create(config) {
  var server = restify.createServer({
    name: 'lunch-backend'
  })
  server.use(restify.authorizationParser())
  server.use(restify.queryParser())
  server.use(restify.bodyParser());

  function authenticate(req, res, next) {
    if (!req.authorization || !req.authorization.basic) {
      return next(new restify.UnauthorizedError())
    }
    const user = req.authorization.basic.username
    const password = req.authorization.basic.password

    if (user == 'flo' && password == 'nodeI$Great') {
      return next()
    } else {
      return next(new restify.UnauthorizedError())
    }
  }


  server.get('/', getStatus)

  function getStatus(req, res, next) {
    const text = req.params.text
    res.send(200, {
      running: true,
      your_text: text
    })
    return next()
  }

  server.get('/secret', authenticate, getSecret)

  function getSecret(req, res, next) {
    res.send(200, {
      secret_password: '12345678'
    })
    return next()
  }


  const lunchStore = []
  server.get('/reset', reset)
  function reset(req, res, next){
    lunchStore.length = 0
    res.send(200)
  }


  server.post('/lunches', postLunch)

  function postLunch(req, res, next) {
    if (!req.body || !req.body.lunch) {
      return next(new restify.BadRequestError('no lunch given'))
    }
    const lunch = req.body.lunch

    lunchStore.push(lunch)

    res.send(201)
    return next()
  }

  server.get('/lunches', getLunches)
  function getLunches(req, res, next) {
    res.send(200, {lunches: lunchStore})
    return next()
  }


  return server
}
