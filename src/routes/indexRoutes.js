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
router.get('/check-session', (req, res) => {
    const cart = req.session.cart;
    console.log(cart);
    res.send('Session value checked.');
  });
  router.post('/add-to-cart', async (req, res) => {
    const { name, price } = req.body;
  
    try {
      const productData = {
        Name: name,
        Price: price,
        Quantity: 1, 
      };
  
      if (!req.session.cart) {
        req.session.cart = [];
      }
  
      req.session.cart.push(productData);
  
      res.status(200).json({ message: 'Product added to cart' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
module.exports = router 