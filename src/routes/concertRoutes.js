const express = require("express");
const router = express.Router();

const concertController = require("../controllers/concertController");

router.get('/', concertController.concerts);
router.get('/:id', concertController.detail);
router.get('/', concertController.create);
router.post('/', concertController.create);
router.get('/:id/edit', concertController.editConcert);
router.put('/:id', concertController.editConcert);
router.delete('/:id', concertController.deleteConcert);



module.exports = router; 