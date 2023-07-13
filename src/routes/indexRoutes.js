const express = require("express")
const router = express.Router()

const indexController = require("../controllers/indexController")
router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/checkout', indexController.checkout);
router.get('/register', indexController.register);
router.get('/detail', indexController.detail);
router.get('/registerdata', indexController.registerdata);
router.get('/todosLosConciertos', indexController.todosLosConciertos);

module.exports = router 