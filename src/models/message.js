const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: String,
  email: String,
  content: String,
});

const Message = mongoose.model('massage', messageSchema);
module.exports = Message;
