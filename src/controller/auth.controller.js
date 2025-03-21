const sendResponse = require("../utils/sendResponse");
const { returnMessage } = require("../utils/utils");
const AppError = require("./../helpers/errorHandler");
const authService = require("../services/authService");
const catchAsyncError = require("../helpers/catchAsyncError");

exports.signUp = catchAsyncError(async (req, res, next) => {
  const registeredUser = await authService.register(req.body);

  if (typeof registeredUser === "string")
    return next(new AppError(registeredUser, 400));

  sendResponse(res, true, returnMessage("userRegisterd"), registeredUser, 200);
});

exports.login = catchAsyncError(async (req, res, next) => {
  const loggedInUser = await authService.login(req.body);
  if (typeof loggedInUser === "string")
    return next(new AppError(loggedInUser, 400));

  sendResponse(res, true, returnMessage("userLogin"), loggedInUser, 200);
});
