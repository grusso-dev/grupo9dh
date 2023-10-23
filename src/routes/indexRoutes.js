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
router.get('/todosLosConciertos', indexController.todosLosConciertos); 
router.post('/add-to-cart', indexController.addToCart);
router.get('/check-session', (req, res) => {
  const cart = req.session.cart;
  console.log(cart);
  res.send(cart);
});
router.post('/incrementQuantity', (req, res) => {
  const cardIndex = req.body.cardIndex; 
  req.session.cart[cardIndex].Quantity++;

  res.json({ success: true });
});
router.post('/decrementQuantity', (req, res) => {
  const cardIndex = req.body.cardIndex; 
  req.session.cart[cardIndex].Quantity--;

  res.json({ success: true });
});
router.post('/resetQuantity', (req, res) => {
  const cardIndex = req.body.cardIndex; 
  req.session.cart[cardIndex].Quantity = 0;

  res.json({ success: true });
});
module.exports = router 