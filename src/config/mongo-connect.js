'use strict'

const
  mongoose = require('mongoose'),
  CONSTANTS = require('./constants')

module.exports = mongoose.connect(CONSTANTS.MONGO.CONFIG.url, CONSTANTS.MONGO.OPTIONS)
