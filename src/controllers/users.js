const textVersion = require('textversionjs');
const sanitizeHtml = require('sanitize-html');
const User = require('../models/user');
const { sanitizeConfig } = require('../config');

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    const securedUsers = users.map((user) => user.secured());
    res.status(200).json(securedUsers);
  },

  newUser: async (req, res, next) => {
    const { email, password } = req.body;

    const oldUser = await User.findById({ email });
    if (oldUser) {
      return res
        .status(500)
        .json({ success: false, error: 'Email is already taken' });
    }

    const newUser = await new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
    newUser.username = await User.getUsernameUidFor(email);

    const user = await newUser.save();
    res.status(201).json(user.secured());
  },

  getUser: async (req, res, next) => {
    const { userId } = req.params;
    let user = await User.findOne({ username: userId });
    res.status(200).json(user.secured());
  },

  replaceUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },

  updateUser: async (req, res, next) => {
    const { userId } = req.params;

    if (req.user.role === 'admin' || req.user._id.equals(userId)) {
      const newUser = {};
      if (req.body.email)
        newUser['email'] = req.body.email.toLowerCase();
      if (req.body.password)
        newUser['password'] = req.user.encryptPassword(
          req.body.password,
        );
      if (req.body.role) newUser['role'] = req.body.role;
      if (req.body.picUrl) newUser['picUrl'] = req.body.picUrl;
      if (req.body.name)
        newUser['name'] = req.body.name
          .toLowerCase()
          .replace(/-/g, ' ');
      if (req.body.surname)
        newUser['surname'] = req.body.surname
          .toLowerCase()
          .replace(/-/g, ' ');
      const name = req.body.name || req.user.name;
      const surname = req.body.surname || req.user.surname;
      newUser[
        'fullName'
      ] = `${name} ${surname}`.toLowerCase().replace(/-/g, ' ');
      if (req.body.username) {
        const username = req.body.username
          .toLowerCase()
          .replace(/-/g, ' ');
        newUser['username'] = username;
        const oldUser = await User.findOne({ username });
        if (oldUser && !req.user._id.equals(oldUser._id)) {
          return res.status(500).json({
            success: false,
            error: 'Username is already taken',
          });
        }
      }
      if (req.body.matricula)
        newUser['matricula'] = req.body.matricula;
      if (req.body.title)
        newUser['title'] = req.body.title
          .toLowerCase()
          .replace(/-/g, ' ');
      if (req.body.about) newUser['about'] = req.body.about;
      if (req.body.specialities)
        newUser['specialities'] = req.body.specialities.map((st) =>
          st.toLowerCase().replace(/-/g, ' '),
        );
      if (req.body.themes)
        newUser['themes'] = req.body.themes.map((st) =>
          st.toLowerCase().replace(/-/g, ' '),
        );
      if (req.body.atentionType)
        newUser['atentionType'] = req.body.atentionType.map((st) =>
          st.toLowerCase().replace(/-/g, ' '),
        );
      if (req.body.practice) newUser['practice'] = req.body.practice;
      if (req.body.addressList)
        newUser['addressList'] = req.body.addressList.map((ob) => ({
          ...ob,
          province: ob.province.toLowerCase().replace(/-/g, ' '),
          locality: ob.locality.toLowerCase().replace(/-/g, ' '),
        }));
      if (req.body.phoneList)
        newUser['phoneList'] = req.body.phoneList;
      if (req.body.permits) newUser['permits'] = req.body.permits;

      const oldUser = await User.findByIdAndUpdate(userId, {
        $set: newUser,
      });
      const user = await User.findById(userId);
      res.status(200).json({ user: user.secured(), success: true });
    } else {
      res.status(401).json({
        success: false,
        error: 'El usuario no esta autorizado',
      });
    }
  },

  removeUser: async (req, res, next) => {
    const { userId } = req.params;
    await User.deleteOne({ _id: userId });
    res.status(200).json({ success: true });
  },
};
