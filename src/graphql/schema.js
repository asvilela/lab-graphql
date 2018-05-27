const { makeExecutableSchema } = require('graphql-tools')

const
  Query = require('./query'),
  Mutation = require('./mutation'),
  Type = require('./type'),
  Resolvers = require('./resolver')

const SchemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`
module.exports = makeExecutableSchema({
  typeDefs: [
    SchemaDefinition,
    Query,
    Mutation,
    Type
  ],
  resolvers: Resolvers
})
