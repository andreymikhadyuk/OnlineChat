const OK_STATUS = 200;
const ERROR_STATUS = 400;

const sendOk = (res, data = {}) => {
  res.status(OK_STATUS).json({ success: true, ...data });
};

const sendError = (res, data = {}) => {
  res.status(ERROR_STATUS).json({ success: false, ...data });
};

module.exports = {
  sendOk,
  sendError,
};