const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inscriptionSchema = new Schema({
  name: String,
  email: String,
  eventId: String,
  utm_source: String,
  event: {
    type: Schema.Types.ObjectId,
    ref: 'event',
  },
});

const Inscription = mongoose.model('inscription', inscriptionSchema);
module.exports = Inscription;
