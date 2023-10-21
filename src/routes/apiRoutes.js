const express = require("express")
const router = express.Router()
const apiController = require("../controllers/apiController")
router.get('/getusers', apiController.getUsers);
router.get('/totalusers', apiController.totalusers);
router.get('/totalgeneros', apiController.totalgeneros);
router.get('/totalconcert', apiController.totalconcert);
router.get('/generos', apiController.getGeneros);
router.get('/ultimoconcert', apiController.ultimoconcert);
router.get('/concert/:id', apiController.concert);
router.get('/concerts', apiController.concerts);


module.exports = router