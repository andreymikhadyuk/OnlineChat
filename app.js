const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const passport = require('passport');
const appConfig = require('config').get('app');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

require('./models');

app.use('/', require('./routes'));

server.listen(appConfig.port, () => {
  console.log(`App started on port ${appConfig.port}`);
});
