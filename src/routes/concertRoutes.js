const express = require("express");
const router = express.Router();

const concertController = require("../controllers/concertController");

router.get('/', concertController.concerts);//listado
//conciertos/detail/1
router.get('/detail/:id', concertController.detail);//ver
router.get('/create', concertController.create);//crear
//router.post('/create', concertController.saveConcert);// Guardar
router.get('/edit/:id', concertController.editConcert); // Mustra vista de edicion 
router.put('/edit/:id', concertController.editConcert); // Guardar info editada
router.delete('/delete/:id', concertController.deleteConcert); // Eliminar



module.exports = router; 

