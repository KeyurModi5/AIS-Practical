const sendResponse = require("../utils/sendResponse");
const { returnMessage } = require("../utils/utils");
const AppError = require("./../helpers/errorHandler");
const aiService = require("../services/openAiService");
const catchAsyncError = require("../helpers/catchAsyncError");

exports.generateAi = catchAsyncError(async (req, res, next) => {
  const generate = await aiService.processText(req.body);

  if (typeof generate === "string") return next(new AppError(generate, 400));

  sendResponse(res, true, returnMessage("generateAi"), generate, 200);
});
