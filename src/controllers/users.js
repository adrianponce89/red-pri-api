const path = require('path');
const fs = require('fs');
const imgur = require('imgur');
const User = require('../models/user');
const { isImage } = require('../utils');

imgur.setClientId(process.env.IMGUR_CLIENT);
imgur.setAPIUrl(process.env.IMGUR_API_URL);

module.exports = {
  index: async (req, res, next) => {
    const query =
      req.user && req.user.role === 'admin'
        ? {}
        : { 'permits.index': true };
    const users = await User.find(query);
    const securedUsers = users.map((user) => user.secured());
    res.status(200).json(securedUsers);
  },

  newUser: async (req, res, next) => {
    const data = JSON.parse(req.body.data);

    const oldUser = await User.findOne({ email: data.email });
    if (oldUser) {
      return res
        .status(500)
        .json({ success: false, error: 'Email is already taken' });
    }

    const sanitized = {
      _id: data._id,
      email: data.email,
      password: data.password,
      role: data.role,
      name: data.name,
      surname: data.surname,
      fullname: data.fullName,
      username: data.username,
      matricula: data.matricula,
      title: data.title,
      about: data.about,
      specialities: data.specialities,
      themes: data.themes,
      atentionType: data.atentionType,
      practice: data.practice,
      addressList: data.addressList,
      phoneList: data.phoneList,
      permits: data.permits,
    };

    if (req.file) {
      if (!isImage(req.file)) {
        return res.status(400).json({
          success: false,
          error: 'Tipo de imagen invalido',
        });
      }
      const filePath = path.join(
        __dirname,
        '../../uploads',
        req.file.filename,
      );

      // Upload new Image to Imgur
      const imgurRes = await imgur.uploadFile(filePath);

      // Save Imgur data on article
      sanitized['picUrl'] = imgurRes.data.link;
      sanitized['deletehash'] = imgurRes.data.deletehash;

      // Delete temporal image server
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    const newUser = await new User(sanitized);

    newUser.password = newUser.encryptPassword(data.password);

    if (data.username) {
      const username = data.username.toLowerCase().replace(/-/g, ' ');
      newUser['username'] = username;
      const otherUser = await User.findOne({ username });
      if (otherUser && !oldUser._id.equals(otherUser._id)) {
        return res.status(500).json({
          success: false,
          error: 'Username is already taken',
        });
      }
    } else {
      newUser['username'] = await User.getUsernameUidFor(data.email);
    }
    const user = await newUser.save();
    res.status(201).json({ user: user.secured(), success: true });
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

      const oldUser = await User.findOne({ _id: userId });

      if (data.email) newUser['email'] = data.email.toLowerCase();
      if (data.password)
        newUser['password'] = req.user.encryptPassword(data.password);
      if (req.user.role === 'admin' && data.role) {
        newUser['role'] = data.role;
      }
      if (data.picUrl) newUser['picUrl'] = data.picUrl;
      if (req.file) {
        if (!isImage(req.file)) {
          return res.status(400).json({
            success: false,
            error: 'Tipo de imagen invalido',
          });
        }
        const filePath = path.join(
          __dirname,
          '../../uploads',
          req.file.filename,
        );

        // Delete previous image from Imgur
        if (oldUser.deletehash) {
          await imgur.deleteImage(oldUser.deletehash);
        }
        // Upload new Image to Imgur
        const imgurRes = await imgur.uploadFile(filePath);

        // Save Imgur data on user
        newUser['picUrl'] = imgurRes.data.link;
        newUser['deletehash'] = imgurRes.data.deletehash;

        // Delete temporal image server
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(err);
          }
        });
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
        const otherUser = await User.findOne({ username });
        if (otherUser && !oldUser._id.equals(otherUser._id)) {
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
      if (req.user.role === 'admin' && data.permits) {
        newUser['permits'] = data.permits;
      }

      await User.findByIdAndUpdate(userId, {
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
    const oldUser = await User.findOne({ _id: userId });
    if (oldUser.deletehash) {
      await imgur.deleteImage(oldUser.deletehash);
    }
    await User.deleteOne({ _id: userId });
    res.status(200).json({ success: true });
  },
};
