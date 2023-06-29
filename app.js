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

//app.use('/productos', rutasProductos);//

const port = 3000
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: ${port}`)
})

/*
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"))
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


*/

