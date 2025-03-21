const sendResponse = require("../utils/sendResponse");
const { returnMessage } = require("../utils/utils");
const AppError = require("./../helpers/errorHandler");
const userService = require("../services/userService");
const catchAsyncError = require("../helpers/catchAsyncError");

exports.getUser = catchAsyncError(async (req, res, next) => {
  const getUSer = await userService.getUserById(req.user);
  if (typeof getUSer === "string") return next(new AppError(getUSer, 400));

  sendResponse(res, true, returnMessage("userLogin"), getUSer, 200);
});
