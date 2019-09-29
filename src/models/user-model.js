const
  mongoose = require('mongoose'),
  { Schema } = mongoose;

const UserSchema = new Schema({
  id: String,
  username: String,
  name: String,
  email: String,
  create_at: { type: Date, default: Date.now },
});

module.exports = {
  UserSchema,
  User: mongoose.model('User', UserSchema),
};
