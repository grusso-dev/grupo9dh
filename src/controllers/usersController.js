const path = require("path");
const usersController = {

  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  registerdata: (req, res) => {
    res.render("registerdata");
  }
};

module.exports = usersController;
