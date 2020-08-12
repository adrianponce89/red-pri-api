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
  fullName: String,
  username: { type: String, unique: true, required: true },
  matricula: String,
  title: String,
  about: { type: String, text: true },
  specialities: [String],
  themes: [String],
  atentionType: [String],
  practice: { type: String, text: true },
  welfare: [String],
  addressList: [
    {
      street: String,
      floor: String,
      reference: String,
      province: String,
      locality: String,
      zipCode: String,
    },
  ],
  phoneList: [
    {
      phoneType: String,
      number: String,
      attentionHours: String,
    },
  ],
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
    picUrl: this.picUrl,
    name: this.name,
    surname: this.surname,
    fullname: this.fullName,
    username: this.username,
    matricula: this.matricula,
    title: this.title,
    about: this.about,
    specialities: this.specialities,
    themes: this.themes,
    atentionType: this.atentionType,
    practice: this.practice,
    addressList: this.addressList,
    phoneList: this.phoneList,
  };
};

userSchema.statics.getUsernameUidFor = async (email) => {
  const separatorIndex = email.indexOf('@');
  let leftEmail = email.slice(0, separatorIndex);
  let username = leftEmail;
  let user = await User.findOne({ username });
  let index = 1;
  while (!!user) {
    username = `${leftEmail}-${index}`;
    user = await User.findOne({ username });
    index++;
  }
  return username;
};

const User = mongoose.model('user', userSchema);
module.exports = User;
