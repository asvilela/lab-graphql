const { merge } = require('lodash')

const
  userResolvers = require('./resources/user/user-resolver')

const Resolvers = merge(
  userResolvers
)

module.exports = Resolvers
