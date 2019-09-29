const User = require('../models/user-model').User;

const findAll = () => {
  return User.find();
};

module.exports = {
  findAll,
};
