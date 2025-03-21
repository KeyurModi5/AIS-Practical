const { generateAi } = require("../controller/ai.controller");
const { getUser } = require("../controller/user.controller");
const { protect } = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const aiRoute = require("express").Router();

aiRoute.use(protect);
aiRoute.post("/generate", roleMiddleware("user"), generateAi);

module.exports = aiRoute;
