const Message = require('../models/message');

module.exports = {
  index: async (req, res, next) => {
    const messages = await Message.find({});
    const plainMessages = messages.map((message) => ({
      name: message.name,
      email: message.email,
      content: message.content,
    }));
    res.status(200).json(plainMessages);
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
