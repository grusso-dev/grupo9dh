const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const methodOverride = require('method-override'); // To use PUT and DELETE methods
const session = require('express-session');

// Initialize session with a secret
app.use(session({
  secret: 'Rhythm',
  resave: false,           
  saveUninitialized: true, 
}));
app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = [];
  }
  next();
});

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride('_method'));

const rutasIndex = require('./src/routes/indexRoutes');
app.use('/', rutasIndex);

const rutasUsers = require('./src/routes/usersRoutes');
app.use('/users', rutasUsers);

const rutasConcert = require('./src/routes/concertRoutes');
app.use('/conciertos', rutasConcert);

const rutasApi = require('./src/routes/apiRoutes');
app.use('/api', rutasApi);

const port = 3000;
app.listen(port, () => {
  console.log(`Aplicacion escuchando en el puerto: http://localhost:${port}`);
});
