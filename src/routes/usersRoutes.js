const express = require("express")
const router = express.Router()

const multer=require("multer");
const path = require("path");
// Configuracion del Multer  Local
/* 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"../../public/img"));// va la ubicacion deonde se guardara el archivo
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, 'user-' + uniqueSuffix + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage })
*/
// Configuracion del Multer en memoria
const upload = multer({ storage: multer.memoryStorage() });

const UsersController = require("../controllers/usersController")
router.get('/', UsersController.login);
router.get('/login', UsersController.login);
router.post('/logindata', UsersController.logindata);
router.get('/register', UsersController.register);
router.get('/registerdata', UsersController.registerdata);
router.post('/save',upload.single("image"), UsersController.save);//router.post('/save',upload.single("image"), UsersController.save);

module.exports = router 