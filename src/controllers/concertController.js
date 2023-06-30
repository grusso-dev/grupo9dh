const path = require("path");
const rutasconcertController = {

  detail: (req, res) => {
    res.render("detail");
  },
  create: (req, res) => {
    res.render("editconcert");
  },
  edit: (req, res) => {
    res.render("editconcert");
  }
};

module.exports = rutasconcertController;
