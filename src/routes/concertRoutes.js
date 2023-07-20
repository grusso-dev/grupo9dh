const express = require("express");
const router = express.Router();
const multer=require("multer");


const concertController = require("../controllers/concertController");
// Configuracion del Multer en memoria
const upload = multer({ storage: multer.memoryStorage() });

router.get('/', concertController.concerts); // ver todos
router.get('/detail/:id', concertController.detail); //ver un concert
router.get('/create', concertController.create); //form creacion
router.post('/create', upload.single("image"),concertController.saveConcert); //actualizar concert
router.get('/edit/:id', concertController.editConcert); //ver edit. el form igual que create pero con los datos pre-cargados en valor value y boton edit.
router.put('/edit/:id', concertController.saveEditConcert); // guardar info editada
router.delete('/delete/:id', concertController.deleteConcert); // elimina concierto editado. el form igual que create pero con los datos pre-cargados en valor value y boton delete.

module.exports = router; 