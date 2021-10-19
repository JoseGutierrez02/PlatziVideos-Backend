const boom = require('@hapi/boom');

const scopesValidationHandler = (allowedScopes) => {
  return (req, res, next) => {
    if (!req.user || (req.user && !req.user.scopes)) {
      next(boom.unauthorized('Missing scopes'));
    }

    const permisions = allowedScopes.map((scope) =>
      req.user.scopes.includes(scope)
    );

    const hasAccess = !permisions.includes(false);

    console.log();

    if (hasAccess) {
      next();
    } else {
      next(boom.unauthorized('Insufficient scopes'));
    }
  };
};

module.exports = scopesValidationHandler;
