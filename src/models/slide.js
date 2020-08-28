const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const slideSchema = new Schema({
  title: String,
  content: String,
  href: String,
  picUrl: String,
  deletehash: String,
});

const Slide = mongoose.model('slide', slideSchema);
module.exports = Slide;
