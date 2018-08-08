const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth');
const MessageController = require('../controllers/message');

router.post('/api/login', AuthController.login);
router.post('/api/signup', AuthController.signup);

router.post('/api/message', AuthController.checkAuthorization, MessageController.saveMessage);

module.exports = router;