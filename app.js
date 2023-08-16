const express = require('express')
const path = require('path')
const app = express()
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
//const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "/src/views"))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")))
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE



//const rutasProductos = require('./src/routes/productRoutes');//
const rutasIndex = require('./src/routes/indexRoutes');
app.use('/', rutasIndex);

const rutasUsers = require('./src/routes/usersRoutes');
app.use('/users', rutasUsers);

const rutasConcert = require('./src/routes/concertRoutes');
const { createSecretKey } = require('crypto');
app.use('/conciertos', rutasConcert);


const port = 3000
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: ${port}`)
})

