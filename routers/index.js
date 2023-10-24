const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const { authenticatedUser } = require("../middleware/auth.middleware");

router.use("/auth", authRouter);
router.get("/dashboard", authenticatedUser, (req, res) => {
  res.json("Welcome to the dashboard");
});
router.get("/", function (req, res) {
  res.json("router");
});

module.exports = router;
