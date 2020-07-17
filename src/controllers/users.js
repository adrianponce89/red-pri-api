const textVersion = require('textversionjs');
const sanitizeHtml = require('sanitize-html');
const User = require('../models/user');
const { sanitizeConfig } = require('../config');

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    const plainUsers = users.map((user) => ({
      _id: user._id,
      email: user.email,
      role: user.role,
    }));
    res.status(200).json(plainUsers);
  },

  newUser: async (req, res, next) => {
    const { email, password } = req.body;
    const newUser = await new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);

    const user = await newUser.save();
    const plainUser = {
      _id: user._id,
      email: user.email,
      role: '',
    };

    res.status(201).json(plainUser);
  },

  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    const plainUser = {
      _id: user._id,
      email: user.email,
      role: user.role,
    };
    res.status(200).json(plainUser);
  },

  replaceUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },

  updateUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = {};
    if (req.body.email) newUser['email'] = req.body.email;
    if (req.body.password) newUser['password'] = req.body.password;
    if (req.body.role) newUser['role'] = req.body.role;

    const oldUser = await User.findByIdAndUpdate(userId, {
      $set: newUser,
    });
    res.status(200).json({ success: true });
  },

  removeUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.deleteOne({ _id: userId });
    res.status(200).json({ user, success: true });
  },
};
