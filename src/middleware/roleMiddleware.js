const ErrorHandler = require("../helpers/errorHandler");

module.exports = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return next(new ErrorHandler("You are not Authorised!", 401));
    }
    next();
  };
};
