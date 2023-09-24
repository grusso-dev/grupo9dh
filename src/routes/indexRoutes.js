const express = require("express")
const router = express.Router()

const { Concert } = require('../database/models/conciertos');

const indexController = require("../controllers/indexController")
router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/checkout', indexController.checkout);
router.get('/register', indexController.register);
router.get('/detail/:id', indexController.detail);
router.get('/registerdata', indexController.registerdata);
router.get('/todosLosConciertos', (req, res) => {
    conciertos.findAll()
      .then(concerts => {
        res.render('todosLosConciertos', { conciertos });
      })
      .catch(error => {
        console.error('Error', error);
      });
  });
  

module.exports = router 