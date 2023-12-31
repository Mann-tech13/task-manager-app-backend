const router = require("express").Router();
const { login, register, profile } = require("../service/userImpl");

router.post("/login", login);
router.post("/register", register);
router.get("/profile", profile);

module.exports = router;
