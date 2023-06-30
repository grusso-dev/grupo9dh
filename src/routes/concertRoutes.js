const express = require("express")
const router = express.Router()

const ConsertController = require("../controllers/concertController")
router.get('/', ConsertController.detail);
router.get('/login', ConsertController.create);
router.get('/register', ConsertController.edit);

module.exports = router 