const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { getProfile, updateProfile, search } = require("../controllers/userController");

router.get("/me", auth, getProfile);
router.put("/update", auth, updateProfile);
router.get("/search", auth, search);

module.exports = router;
