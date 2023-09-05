let db = require('../database/models');

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
      db.Conciertos.findByPk(req.params.id)
      .then(function(concierto) {
          res.render("detail", {concierto: concierto})
      }
      )
  },
  create: (req, res) => {
    res.render('createConcert');
  },
  concerts: (req, res) => {
    
    db.Conciertos.findAll()
    .then(function(conciertos) {
      res.render('todosLosConciertos', {conciertos: conciertos})
    })},
  deleteConcert: (req, res) => {
    res.render('deleteconcert');
  },
  saveConcert: function(req, res) {
    db.Conciertos.create({
        artista: req.body.artista,
        title: req.body.name,
        date: req.body.date,
        direccion: req.body.direccion,
        provincia: req.body.provincia,
        ciudad: req.body.ciudad,
        image: req.body.imagen,
        descripcion: req.body.descripcion
        
    }).then(() => {
        res.redirect('/');
    }).catch((error) => {
        console.error("Error creating concert:", error);
    });
},
editConcert: (req, res) => {
      db.Conciertos.findByPk(req.params.id)
          .then(function(concierto) {
          res.render("detail", {concierto: concierto})
  }
  )
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