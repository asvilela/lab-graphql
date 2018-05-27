'use strict'

/********************************************************************
Types Declaration
********************************************************************/
const User = `
  type User {
    id: ID
    username: String
    name: String
    email: String
  }
`

/********************************************************************
Inputs Declaration
********************************************************************/
const UserInput = `
  input UserInput {
    username: String
    name: String
    email: String
  }
`

/********************************************************************
Queries Declaration
********************************************************************/
const userQueries = `
  getUsers: [User]
  getUser(id: String): User
`

/********************************************************************
Mutaions Declaration
********************************************************************/
const userMutations = `
  createUser(input: UserInput!): User
  deleteUser(id: String!): Boolean
`

module.exports = {
  userTypes: [
    User,
    UserInput
  ],
  userQueries,
  userMutations
}
