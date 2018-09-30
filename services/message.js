const Message = require('../models/message');

const saveMessage = (userId, { text, createdAt }) =>
  new Promise((resolve, reject) => {
    const message = new Message({
      userId,
      text,
      createdAt,
    });
    message.save((err, newMessage) => {
      if (err) return console.error(err) && reject(err);
      resolve(newMessage);
    });
  });

const getMessages = () =>
  new Promise((resolve, reject) => {
    Message.find({}, (err, messages) => {
      if (err) return console.error(err) && reject(err);
      resolve(messages);
    });
  });

module.exports = {
  saveMessage,
  getMessages,
};