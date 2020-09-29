const Message = require('../models/message');

module.exports = {
  index: async (req, res, next) => {
    const messages = await Message.find({});
    res.status(200).json(messages);
  },
  newMessage: async (req, res, next) => {
    const sanitized = {
      name: req.body.name,
      email: req.body.email,
      content: req.body.content,
    };
    const newMessage = new Message(sanitized);
    const message = await newMessage.save();
    res.status(201).json(message);
  },
  removeMessage: async (req, res, next) => {
    const { messageId } = req.params;
    const message = await Message.deleteOne({ _id: messageId });
    res.status(200).json({ message, success: true });
  },
};
