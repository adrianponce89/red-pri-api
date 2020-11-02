const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: String,
    uid: String,
    content: String,
    category: String,
    date: Date,
    picUrl: String,
    deletehash: String,
    published: Boolean,
    seenCounter: Number,
  },
  {
    timestamps: true,
  },
);

eventSchema.statics.getEventUidFor = async (title) => {
  let mainSlug = title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9/-]/g, '-')
    .toLowerCase();
  let uid = mainSlug;
  let event = await Event.findOne({ uid });
  let index = 1;
  while (!!event) {
    uid = `${mainSlug}-${index}`;
    event = await Event.findOne({ uid });
    index++;
  }
  return uid;
};

const Event = mongoose.model('event', eventSchema);
module.exports = Event;
