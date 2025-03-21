const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const { returnMessage } = require("../utils/utils");
exports.register = async (payload) => {
  try {
    const { username, password, email } = payload;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return returnMessage("userExists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Exclude password field from the response
    const userResponse = newUser.toObject();
    delete userResponse.password;

    return userResponse;
  } catch (error) {
    console.error("Register Error:", error);
    return error.message;
  }
};

exports.login = async (payload) => {
  try {
    const { username, password, email } = payload;
    const user = await User.findOne({ email });
    if (!user) {
      return returnMessage("userNotFound");
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return returnMessage("incorrectEmailPassword");
    }

    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return {
      status: 200,
      user: { id: user._id, username: user.username, email: user.email },
      data: { token },
    };
  } catch (error) {
    console.error("Login Error:", error);
    return error.message;
  }
};
