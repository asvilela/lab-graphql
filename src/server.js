'use strict'

const
  bodyParser = require('koa-body'),
  CONSTANTS = require('./config/constants'),
  convert = require('koa-convert'),
  cors = require('koa-cors'),
  corsError = require('koa-cors-error'),
  db = require('./config/mongo-connect'),
  gzip = require('koa-gzip'),
  http = require('http'),
  helmet = require('koa-helmet'),
  Koa = require('koa'),
  server = new Koa()

server.use(convert(cors(CONSTANTS.CORS)))
server.use(convert(bodyParser(CONSTANTS.BODYPARSER)))
server.use(convert(corsError))
server.use(convert(gzip()))
server.use(helmet())

require('./routes/index')(server)

db
  .then(() => {
    return http.createServer(server.callback()).listen(CONSTANTS.PORT.HTTP)
  })
  .then(() => {
    console.log(`Server listen in port ${CONSTANTS.PORT.HTTP}`)
  })

module.exports = server
