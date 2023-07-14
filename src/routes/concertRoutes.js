const express = require("express");
const router = express.Router();

const concertController = require("../controllers/concertController");

router.get('/', concertController.concerts); // ver todos
router.get('/detail/:id', concertController.detail); //ver un concert
router.get('/create', concertController.create); //form creacion
router.post('/create', concertController.saveConcert); //actualizar concert
router.get('/edit/:id', concertController.editConcert); //ver edit. el form igual que create pero con los datos pre-cargados en valor value y boton edit.
router.put('/edit/:id', concertController.editConcert); // guardar info editada
router.delete('/delete/:id', concertController.deleteConcert); // elimina concierto editado. el form igual que create pero con los datos pre-cargados en valor value y boton delete.

module.exports = router;