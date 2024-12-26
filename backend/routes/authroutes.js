const express = require("express");
const app = express();
const authcontroller = require("../controllers/authcontroller");
const verifyToken = require("../middleware/checkauth");

const router = express.Router();


router.post("/login", authcontroller.login)
router.post("/signup", authcontroller.signup)
router.post("/logout", authcontroller.logout)
router.get("/authCheck", verifyToken, authcontroller.authCheck);

module.exports = router;

