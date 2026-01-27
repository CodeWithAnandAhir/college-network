const express = require("express");
const router = express.Router();

// TEMP test route
router.get("/test", (req, res) => {
  res.json({ message: "Follow route working" });
});

module.exports = router;
