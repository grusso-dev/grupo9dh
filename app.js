const express = require('express')
// const Sequelize = require('sequelize')
const path = require('path')
const app = express()
const methodOverride = require('method-override') // Pasar poder usar los métodos PUT y DELETE
// const jwt = require("jsonwebtoken");

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))
app.use(methodOverride('_method')) // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

// const rutasProductos = require('./src/routes/productRoutes');//
const rutasIndex = require('./src/routes/indexRoutes')
app.use('/', rutasIndex)

const rutasUsers = require('./src/routes/usersRoutes')
app.use('/users', rutasUsers)

const rutasConcert = require('./src/routes/concertRoutes')
// const { createSecretKey } = require('crypto');
// const { error } = require('console');
app.use('/conciertos', rutasConcert)

// definimos parametros de conexion a la base de datos

// const sequelize = new Sequelize ('soundstage','u629722589_dhgrp9','tGpSMq9+',{
//   host:'localhost',
//   dialect: 'mysql'
// })

// //definimos el modelo
// const concert_model = sequelize.define('concert', {
//   "id":{type:Sequelize.INTEGER, primaryKey:true},
//   "user_id":{type:Sequelize.INTEGER},
//   "genre_id":{type:Sequelize.INTEGER},
// })

// sequelize.authenticate()
//   .then(()=>{
//     console.log("Base de datos: CONECTADA")
//   })
//   .catch( error =>{
//     console.log("El error de la conexion es:" +error)
//   })

// concert_model.findAll({attributes: ['id','user_id']})
//   .then(concert =>{
//     console.log(concert)
//   })
//   .catch( error =>{
//     console.log(error)
//   })

const port = 3000
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: http://localhost:${port}`)
})
