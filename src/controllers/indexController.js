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
  todosLosConciertos: (req, res) => {
    Promise.all([
      conciertos.findAll(),
      genero.findAll(),
    ])
      .then(([concerts, genre]) => {
        res.render(path.join(__dirname, "../views/todosLosConciertos.ejs"), {
          conciertos: concerts,
          genero: genre,
        });
      })
      .catch((error) => {
        console.error("Error", error);
      });
  },
  registerdata: (req, res) => {
    res.render("registerdata");
  },
};

module.exports = indexController;
