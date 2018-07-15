const Message = require('../models/message');

const saveMessage = (userId, text) =>
  new Promise((resolve, reject) => {
    const message = new Message({
      userId,
      text,
    });
    message.save((err, newMessage) => {
      if (err) return reject(err);
      resolve(newMessage);
    });
  });

module.exports = {
  saveMessage,
};