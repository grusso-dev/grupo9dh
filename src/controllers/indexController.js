const path = require("path");
const indexController = {
  index: (req, res) => {
    res.render(path.join(__dirname, "../views/index.ejs"));
  },
  login: (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"));
  },
  checkout: (req, res) => {
    res.render(path.join(__dirname, "../views/checkout.ejs"));
  },
  register: (req, res) => {
    res.render("register");
  },
  detail: (req, res) => {
    res.render(path.join(__dirname, "../views/detail.ejs"));
  },
  todosLosConciertos: async (req, res) => {
    try {
      const conciertos = await db.Concierto.findAll({ include: [{ association: "Generos" }] });
      console.log(conciertos);
      res.render('todosLosConciertos', { concerts: conciertos });
    } catch (error) {
      console.error('Error al obtener la lista de conciertos:', error);
      // Manejar el error de alguna manera apropiada, como enviar una respuesta de error al cliente.
      res.status(500).send('Error al obtener la lista de conciertos');
    }
  },  
  registerdata: (req, res) => {
    res.render("registerdata");
  },
};

module.exports = indexController;
