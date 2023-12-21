const express = require("express");
const router = express.Router();

const taskRoutes = require("./taskRoutes");

router.use("/api", taskRoutes);

module.exports = router;
