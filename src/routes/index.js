'use strict'

const
  graphqlHTTP = require('koa-graphql'),
  schema = require('../graphql/schema'),
  Router = require('koa-router'),
  router = new Router()

module.exports = (server) => {
  router.all('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  }))
  server.use(router.routes()).use(router.allowedMethods())
}
