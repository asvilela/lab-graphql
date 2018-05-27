const { userTypes } = require('./resources/user/user-schema')

const Type = `
  ${userTypes}
`

module.exports = Type
