const getUniqueUsersIdFromMessages = messages => messages.reduce((ids, message) => {
  if (ids.includes(message.userId)) {
    return ids;
  }
  return [...ids, message.userId];
}, []);

module.exports = {
  getUniqueUsersIdFromMessages,
};
