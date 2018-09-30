const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth');
const MessageController = require('../controllers/message');
const UserController = require('../controllers/UserController');

router.post('/api/login', AuthController.login);
router.post('/api/signup', AuthController.signup);

router.get('/api/me', AuthController.checkAuthorization, UserController.getCurrentUserData);

router.get('/api/messages', AuthController.checkAuthorization, MessageController.getMessages);
router.post('/api/messages', AuthController.checkAuthorization, MessageController.saveMessage);

module.exports = router;