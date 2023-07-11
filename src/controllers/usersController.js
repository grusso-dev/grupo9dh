const fs = require('fs');
const path = require("path");

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {

  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  registerdata: (req, res) => {
    res.render("registerdata");
  },
  save: (req, res) => {
    console.log(req.body);
    /*
    newId=0;

		for (let s of users){
			if (newId<s.userid){
				newId=s.userid;
			}
		}
		newId++;


		let newUser =  {
			id:   newId,
			user: req.body.user ,
			mail: req.body.mail,
			name: req.body.name,
			password: req.body.password
		};

		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users,null,' '));
    */
		res.render("login");
  }
};

module.exports = usersController;
