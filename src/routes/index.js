const router = require("express").Router();

const aiRoute = require("./aiRoute");
const userRoute = require("./userRoute");

router.use("/api/v1/user", userRoute);
router.use("/api/v1/ai", aiRoute);
module.exports = router;
