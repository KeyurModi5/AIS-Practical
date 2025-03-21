const { signUp, login } = require("../controller/auth.controller");
const { getUser } = require("../controller/user.controller");
const { protect } = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const userRoute = require("express").Router();
userRoute.post("/register", signUp);
userRoute.post("/login", login);
userRoute.use(protect);
userRoute.get("/:id", roleMiddleware("user"), getUser);

module.exports = userRoute;
