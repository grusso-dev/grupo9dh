const express = require("express")
const router = express.Router()

const UsersController = require("../controllers/usersController")
router.get('/', UsersController.login);
router.get('/login', UsersController.login);
router.get('/register', UsersController.register);
router.get('/registerdata', UsersController.registerdata);

module.exports = router 