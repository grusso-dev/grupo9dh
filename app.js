const express = require('express')
const path = require('path')
const app = express()
app.set("views", path.join(__dirname, "/src/views"))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")))
//const rutasProductos = require('./src/routes/productRoutes');//
const rutasIndex = require('./src/routes/indexRoutes');

//app.use('/productos', rutasProductos);//
app.use('/', rutasIndex);

const port = 3000
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: ${port}`)
})

/*
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/checkout.html"))
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"))
})

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get('/registerdata', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/registerdata.html"))
})

app.get('/detail', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/detail.html"))
})


*/

