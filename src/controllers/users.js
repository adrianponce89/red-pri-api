const textVersion = require('textversionjs');
const sanitizeHtml = require('sanitize-html');
const User = require('../models/user');
const { sanitizeConfig } = require('../config');
const { isImage, getFileExtension } = require('../utils');
const fs = require('fs');
const { pipeline } = require('stream');

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
      const data = JSON.parse(req.body.data);

      if (data.email) newUser['email'] = data.email.toLowerCase();
      if (data.password)
        newUser['password'] = req.user.encryptPassword(data.password);
      if (data.role) newUser['role'] = data.role;
      if (data.picUrl) newUser['picUrl'] = data.picUrl;
      if (req.file) {
        if (!isImage(req.file)) {
          return res.status(400).json({
            success: false,
            error: 'Tipo de imagen invalido',
          });
        }
        console.log(
          'Se recibe imagen para subir a imgur:',
          req.file.filename,
        );
      }
      if (data.name)
        newUser['name'] = data.name.toLowerCase().replace(/-/g, ' ');
      if (data.surname)
        newUser['surname'] = data.surname
          .toLowerCase()
          .replace(/-/g, ' ');
      const name = data.name || req.user.name;
      const surname = data.surname || req.user.surname;
      newUser[
        'fullName'
      ] = `${name} ${surname}`.toLowerCase().replace(/-/g, ' ');
      if (data.username) {
        const username = data.username
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
      if (data.matricula) newUser['matricula'] = data.matricula;
      if (data.title)
        newUser['title'] = data.title
          .toLowerCase()
          .replace(/-/g, ' ');
      if (data.about) newUser['about'] = data.about;
      if (data.specialities) {
        newUser['specialities'] = data.specialities.map((st) =>
          st.toLowerCase().replace(/-/g, ' '),
        );
      }
      if (data.themes) {
        newUser['themes'] = data.themes.map((st) =>
          st.toLowerCase().replace(/-/g, ' '),
        );
      }
      if (data.atentionType) {
        newUser['atentionType'] = data.atentionType.map((st) =>
          st.toLowerCase().replace(/-/g, ' '),
        );
      }
      if (data.practice) newUser['practice'] = data.practice;
      if (data.addressList) {
        newUser['addressList'] = data.addressList.map((ob) => ({
          ...ob,
          province: ob.province.toLowerCase().replace(/-/g, ' '),
          locality: ob.locality.toLowerCase().replace(/-/g, ' '),
        }));
      }
      if (data.phoneList) newUser['phoneList'] = data.phoneList;
      if (data.permits) newUser['permits'] = req.body.permits;

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
