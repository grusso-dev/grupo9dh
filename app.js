const express = require('express')
const path = require('path')
const app = express()

app.set("views", path.join(__dirname, "/src/views"))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")))

//const rutasProductos = require('./src/routes/productRoutes');//
const rutasIndex = require('./src/routes/indexRoutes');
app.use('/', rutasIndex);

const rutasUsers = require('./src/routes/usersRoutes');
app.use('/users', rutasUsers);

const rutasConcert = require('./src/routes/concertRoutes');
app.use('/conciertos', rutasConcert);


const port = 3000
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: ${port}`)
})

