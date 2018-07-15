const MessageService = require('../services/message');
const ResponseService = require('../services/response');

const saveMessage = (req, res) => {
  if (!req.user) return ResponseService.sendUnauthorized();
  MessageService.saveMessage(req.user.id, req.body.text)
    .then(() =>  ResponseService.sendOk(res))
    .catch(() => ResponseService.sendError(res));
};

module.exports = {
  saveMessage,
};