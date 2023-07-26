const router = require("express").Router();
const { login, register } = require("../service/userImpl");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
