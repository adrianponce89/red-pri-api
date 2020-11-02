const path = require('path');
const fs = require('fs');
const imgur = require('imgur');
const textVersion = require('textversionjs');
const sanitizeHtml = require('sanitize-html');
const Event = require('../models/event');
const { sanitizeConfig } = require('../config');
const { isImage } = require('../utils');

imgur.setClientId(process.env.IMGUR_CLIENT);
imgur.setAPIUrl(process.env.IMGUR_API_URL);

module.exports = {
  index: async (req, res, next) => {
    const { limit, sort, order, ...otherQuery } = req.query;
    const options = {
      sort: { createdAt: -1 },
    };
    if (limit) {
      options['limit'] = parseInt(limit);
    }
    if (sort) {
      options['sort'] = { [sort]: order || -1 };
    }

    const events = await Event.find(
      { ...otherQuery, published: true },
      null,
      options,
    );
    const plainEvents = events.map((event) => ({
      _id: event._id,
      title: event.title,
      uid: event.uid,
      date: event.date,
      category: event.category,
      content: textVersion(event.content).substr(0, 500),
      updatedAt: event.updatedAt,
      createdAt: event.createdAt,
      picUrl: event.picUrl,
      seenCounter: event.seenCounter,
    }));

    console.log('events:::', events);
    console.log('plainEvents:::', plainEvents);
    res.status(200).json(plainEvents);
  },

  newEvent: async (req, res, next) => {
    if (!(req.user.permits.writes || req.user.role === 'admin')) {
      return res.status(401).json({
        success: false,
        error: 'El usuario no esta autorizado',
      });
    }

    const data = JSON.parse(req.body.data);

    const sanitized = {
      title: data.title,
      uid: await Event.getEventUidFor(data.title),
      content: sanitizeHtml(data.content, sanitizeConfig),
      category: data.category,
      date: data.date,
      seenCounter: 0,
      published: true,
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

      // Save Imgur data on event
      sanitized['picUrl'] = imgurRes.data.link;
      sanitized['deletehash'] = imgurRes.data.deletehash;

      // Delete temporal image server
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    const newEvent = new Event(sanitized);
    const event = await newEvent.save();

    console.log('newEvent::::', newEvent);
    res.status(201).json(event);
  },

  getEvent: async (req, res, next) => {
    const { eventId } = req.params;
    const event = await Event.findOne({
      uid: eventId,
    });
    res.status(200).json(event);
  },

  replaceEvent: async (req, res, next) => {
    if (!(req.user.permits.writes || req.user.role === 'admin')) {
      return res.status(401).json({
        success: false,
        error: 'El usuario no esta autorizado',
      });
    }

    const { eventId } = req.params;
    const newEvent = req.body;
    const oldEvent = await Event.findByIdAndUpdate(eventId, newEvent);
    res.status(200).json({ success: true });
  },

  updateEvent: async (req, res, next) => {
    if (!(req.user.permits.writes || req.user.role === 'admin')) {
      return res.status(401).json({
        success: false,
        error: 'El usuario no esta autorizado',
      });
    }

    const { eventId } = req.params;
    const newEvent = {};
    const data = JSON.parse(req.body.data);

    if (data.title) {
      newEvent['title'] = data.title;
      newEvent['uid'] = await Event.getEventUidFor(data.title);
    }
    if (data.content) newEvent['content'] = data.content;

    if (data.published != undefined)
      newEvent['published'] = data.published;

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
      const oldEvent = Event.findById(eventId);
      if (oldEvent.deletehash) {
        await imgur.deleteImage(oldEvent.deletehash);
      }
      // Upload new Image to Imgur
      const imgurRes = await imgur.uploadFile(filePath);

      // Save Imgur data on event
      newEvent['picUrl'] = imgurRes.data.link;
      newEvent['deletehash'] = imgurRes.data.deletehash;

      // Delete temporal image server
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    await Event.findByIdAndUpdate(eventId, {
      $set: newEvent,
    });
    res.status(200).json({ success: true });
  },
  removeEvent: async (req, res, next) => {
    const { eventId } = req.params;
    const oldEvent = await Event.findOne({ _id: eventId });
    if (oldEvent.deletehash) {
      await imgur.deleteImage(oldEvent.deletehash);
    }
    await Event.deleteOne({ _id: eventId });
    res.status(200).json({ success: true });
  },
  incrementSeenCounter: async (req, res, next) => {
    const { eventId } = req.params;
    await Event.findOneAndUpdate(
      { _id: eventId },
      {
        $inc: { seenCounter: 1 },
      },
    );
    res.status(200).json();
  },
  uploadImage: async (req, res, next) => {
    if (!(req.user.permits.writes || req.user.role === 'admin')) {
      return res.status(401).json({
        success: false,
        error: 'El usuario no esta autorizado',
      });
    }

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

      // Delete temporal image server
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });

      return res.status(200).json({
        location: imgurRes.data.link,
      });
    }

    return res.status(400).json({ success: false });
  },
};
