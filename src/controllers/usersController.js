const fs = require('fs');
const path = require("path");
const ftp = require('basic-ftp');
const {Readable}=require('stream'); 

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

async function ftp_upload(image_origin_route, image_destiny_route) {
  // Connect to the FTP server
  const client = new ftp.Client();
  await client.access({
    host: 'ftp.linsock.com.ar',
    user: 'u629722589.soundstage',
    password: '12_Soundstage_34'
  });
   // Upload the file to the FTP server
  await client.uploadFrom(image_origin_route, image_destiny_route);
   // Close the FTP connection
  client.close();
}


const usersController = {

  login: (req, res) => {
    res.render("login");
  },
  logindata: (req,res) =>{
	res.redirect('/');
  },
  register: (req, res) => {
    res.render("register");
  },
  registerdata: (req, res) => {
    res.render("registerdata");
  },
  save: async (req, res) => {
		const file = req.file;
		const stream = new Readable();
		stream.push(file.buffer);
		stream.push(null); 


		await ftp_upload(stream , '/public/images/' + file.originalname);

		newId=0;

		newId= users[users.length -1].id;//Obtengo el id del ultimo elemento del array
		newId++;

		let nombreImagen = req.file.originalname;
		let newUser =  {
			id:   newId,
			user: req.body.user ,
			mail: req.body.mail,
			name: req.body.name,
			password: req.body.password,
			img: nombreImagen
		};

		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users,null,' '));
		/*
    */
	 res.render("login");
  }
};

module.exports = usersController;
