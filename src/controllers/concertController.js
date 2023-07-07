const fs = require('fs');
const path = require('path');
const ftp = require('basic-ftp');

const consertsFilePath = path.join(__dirname, '../data/consertsDataBase.json');
const consets = JSON.parse(fs.readFileSync(consertsFilePath, 'utf-8'));

async function ftp_upload(image_origin_rute, image_destiny_route){

		// Connect to the FTP server
		const client = new ftp.Client();
		await client.access({
		  host: 'ftp.linsock.com.ar', 
		  user: 'u629722589.soundstage',
		  password: '12_Soundstage_34'
		});
	
		// Upload the file to the FTP server
		await client.uploadFrom(image_origin_rute, image_destiny_route);
	
		// Close the FTP connection
		client.close();

}

const rutasconcertController = {

  detail: (req, res) => {
    res.render("detail");
  },
  create: (req, res) => {
    res.render("editconcert");
  },
  edit: (req, res) => {
    res.render("editconcert");
  },
  store: async (req, res) => {
    await ftp_upload(	path.join(__dirname,'../../public/images/products', req.file.filename) , '/www/images/' + req.file.filename);
    

  },
};

module.exports = rutasconcertController;
