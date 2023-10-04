const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")
router.get('/getusers', apiController.gatUsers);


module.exports = router