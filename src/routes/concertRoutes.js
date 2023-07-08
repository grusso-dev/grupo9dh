const express = require("express");
const router = express.Router();

const concertController = require("../controllers/concertController");

router.get('/', concertController.concerts);
router.get('/:id', concertController.detail);

module.exports = router; 