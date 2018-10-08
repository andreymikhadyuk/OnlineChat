module.exports = (io) => {
  io.on('connection', (client) => {
    setTimeout(() => {
      client.emit('newMessageCreated', {
        userId: '5ba974b33ffc1516f827bbae',
        text: 'New Message',
        createdAt: 1539001895326,
        user: {
          _id: '5ba974b33ffc1516f827bbae',
          username: 'admin'
        }
      });
    }, 2000);
  });
};
