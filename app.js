const express = require('express');
const app = express();
const server = require('http').Server(app);

require('./models');

app.use('/', require('./routes'));

server.listen(8080, () => {
  console.log('App started on port 8080');
});
