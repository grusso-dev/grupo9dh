const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")
router.get('/getusers', apiController.gatUsers);
router.get('/generos', apiController.getGeneros);


module.exports = router