const Message = require('../models/message');
const UserService = require('../services/UserService');
const UserDto = require('../dto/UserDto');
const { getUniqueUsersIdFromMessages } = require('../helpers/messageHelper');

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

const setUsersForMessages = (messages) => {
  const usersId = getUniqueUsersIdFromMessages(messages);
  return Promise.all(usersId.map(id => UserService.findById(id)))
    .then(users => messages.map(message => {
      const user = users.find(user => user._id.toString() === message.userId);
      return {
        ...message.toObject(),
        user: user && UserDto.convertToDto(user.toObject()) || {},
      };
    }));
};

const getMessages = () =>
  new Promise((resolve, reject) => {
    Message.find({}, (err, messages) => {
      if (err) return console.error(err) && reject(err);
      resolve(messages);
    });
  })
    .then(messages => setUsersForMessages(messages));

module.exports = {
  saveMessage,
  getMessages,
};