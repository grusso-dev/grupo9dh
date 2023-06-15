const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname, "/public")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/"))
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

const port = 3000
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: ${port}`)
})