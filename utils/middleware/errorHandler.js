const { config } = require('../../config');
const boom = require('@hapi/boom');

const withErrorStack = (error, stack) => {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
};

const logErrors = (err, req, res, next) => {
  console.log(err);
  next(err);
};

const wrapError = (err, req, res, next) => {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
};

const errorHandler = (err, req, res, next) => { // eslint-disable-line
  const {
    output: { statusCode, payload },
  } = err;

  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
};

module.exports = {
  logErrors,
  wrapError,
  errorHandler,
};
