'use strict'

const
  URL = require('../../../config/constants').URL,
  axios = require('axios')

const resolvers = {

  Query: {
    getUsers: (parents, args, context, info) => {
      console.log(URL[process.env.NODE_ENV])
      return axios.get(`${URL[process.env.NODE_ENV]}/users`)
        .then(res => res.data)
    },

    getUser: (parents, args, context, info) => {
      return axios.get(`${URL[process.env.NODE_ENV]}/users/${args.id}`)
        .then(res => res.data)
    }
  },

  Mutation: {

    createUser: (parents, args, context, info) => {
      return null
    }

  }

}

module.exports = resolvers
