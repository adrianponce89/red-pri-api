const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: String,
  password: String,
  role: String,
  picUrl: String,
  name: String,
  surname: String,
  matricula: Number,
  title: String,
  about: String,
  specialities: [String],
  themes: [String],
  orientations: [String],
  atentionType: [String],
  practice: String,
  address: [
    {
      street: String,
      number: Number,
      reference: String,
      province: String,
      locality: String,
      zipCode: String,
    },
  ],
  phones: [String],
});

userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.secured = function () {
  return {
    _id: this._id,
    email: this.email,
    role: this.role,
  };
};

const User = mongoose.model('user', userSchema);
module.exports = User;
