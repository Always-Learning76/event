const express = require("express")
const router = express.Router()

const Authcontroller = require('../controllers/authController')

router.post('/signup', Authcontroller.registerNewUser);

module.exports = router