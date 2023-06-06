const express = require('express')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname,"/public")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"/views/index.html"))
})

const port = 3000
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: ${port}`)
})