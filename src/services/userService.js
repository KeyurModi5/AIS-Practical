const User = require("../models/userSchema");
const { returnMessage } = require("../utils/utils");

exports.getUserById = async (user) => {
  try {
    let profileData = await User.findById(user._id).select("-password ").lean();
    if (!profileData) return returnMessage("profileNotExist");
    return profileData;
  } catch (error) {
    return error.message;
  }
};
