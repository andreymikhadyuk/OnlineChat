const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth');
const MessageController = require('../controllers/message');

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

router.post('/message', AuthController.checkAuthorization, MessageController.saveMessage);

module.exports = router;