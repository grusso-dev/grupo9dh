const path = require("path");
const usersController = {

  login: (req, res) => {
    res.render(path.join(__dirname, "../views/login.ejs"));
  },
  register: (req, res) => {
    res.render(path.join(__dirname, "../views/register.ejs"));
  },
  registerdata: (req, res) => {
    res.render(path.join(__dirname, "../views/registerdata.ejs"));
  }
};

module.exports = usersController;
