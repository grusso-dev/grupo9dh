const fs = require('fs');
const path = require("path");
const ftp = require('basic-ftp');
const {Readable}=require('stream'); 

const concertsFilePath = path.join(__dirname, '../data/concertsDataBase.json');

const concerts = JSON.parse(fs.readFileSync(concertsFilePath, 'utf-8'));

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


const concertController = {
  detail: (req, res) => {
		let idconcerts = req.params.id;
		for(let i=0;i<concerts.length;i++){
			if (concerts[i].id==idconcerts){
				var productoEncontrado = concerts[i];
			}
		}
		res.render('detail',{productoEncontrado: productoEncontrado});
  },
  create: (req, res) => {
    res.render('createConcert');
  },
  concerts: (req, res) => {
    res.render("todosLosConciertos", { concerts: concerts });

  },
  deleteConcert: (req, res) => {
    res.render('deleteconcert');
  },
  saveConcert: async (req, res) => {

    const file = req.file;
		const stream = new Readable();
		stream.push(file.buffer);
		stream.push(null); 
		await ftp_upload(stream , '/public/images/' + file.originalname);

    let conciertos = 0;

    for (let i of concerts) {
      if (conciertos < i.id) {
        conciertos = i.id;
      }
    }
    conciertos++;
    let nombreImagen = 'https://linsock.com.ar/soundstage/public/images/' + req.file.originalname;
    let newConcert = {
      id: conciertos,
      name: req.body.name,
      price: req.body.price,
      date: req.body.date,
      location: req.body.location,
      description: req.body.description,
      image:nombreImagen
    };

    concerts.push(newConcert);
    fs.writeFileSync(concertsFilePath, JSON.stringify(concerts, null, ' '));

    res.redirect('/conciertos');
  },
  editConcert: (req, res) => {
    let idConcert = req.params.id;

    let concertToEdit = concerts.find(concert => concert.id == idConcert);

    res.render('editConcert', { concertToEdit: concertToEdit });
  },
  saveEditConcert: (req, res) => {
    let idConcert = req.params.id;

    for (let index = 0; index < concerts.length; index++) {
      if(concerts[index].id==idConcert){
        concerts[index].name= req.body.name;
        concerts[index].price= req.body.price;
        concerts[index].date= req.body.date;
        concerts[index].location= req.body.location;
        concerts[index].description= req.body.description;
      }
      
    }

    // let concertToEdit = concerts.find(concert => concert.id == idConcert);

    fs.writeFileSync(concertsFilePath, JSON.stringify(concerts, null, ' '));

    res.redirect('/conciertos');
  }
};

module.exports = concertController;