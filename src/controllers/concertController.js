const db = require('../database/models');
const fs = require('fs');
const path = require("path");
const ftp = require('basic-ftp');
// const { Concert, Genero } = require('../database/models')

const concertsFilePath = path.join(__dirname, '../data/concertsDataBase.json');

const concerts = JSON.parse(fs.readFileSync(concertsFilePath, 'utf-8'));

async function ftp_upload(image_origin_route, image_destiny_route) {
  // Conectarse al servidor FTP
  const client = new ftp.Client();
  try {
    await client.access({
      host: 'ftp.linsock.com.ar',
      user: 'u629722589.soundstage',
      password: '12_Soundstage_34'
    });

    // Subir el archivo al servidor FTP
    await client.uploadFrom(image_origin_route, image_destiny_route);
  } catch (error) {
    console.error('Error al subir archivo al FTP:', error);
  } finally {
    // Cerrar la conexión FTP
    client.close();
  }
}

const concertController = {
  detail: (req, res) => {
    db.Concierto.findByPk(req.params.id)
      .then(function (concierto) {
        res.render("detail", { productoEncontrado: concierto});
      })
      .catch(function (error) {
        console.error("Error al buscar concierto:", error);
        res.render("errorPage"); // Manejar el error adecuadamente
      });
  },
  create: (req, res) => {
    res.render('createConcert')
  },
  concerts: async (req, res) => {
    console.log('probando')

    let conciertos = await db.Concierto.findAll();
    console.log(conciertos);
    res.render('todosLosConciertos', { concerts: conciertos });

    // db.Conciertos.findAll()
    //   .then(function (conciertos) {
    //     res.render('todosLosConciertos', { concerts: conciertos });
    //   })
    //   .catch(function (error) {
    //     console.error("Error al buscar conciertos:", error);
    //     res.render("errorPage"); // Manejar el error adecuadamente
    //   });
  },
  deleteConcert: (req, res) => {
    db.Concierto.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function () {
        res.redirect("/conciertos");
      })
      .catch(function (error) {
        console.error("Error al eliminar concierto:", error);
        res.render("errorPage"); // Manejar el error adecuadamente
      });
  },
  saveConcert: async function (req, res) {
    // newConcierto={
    //   user_id:1,
    //   genre_id:1,
    //   artista: req.body.artista,
    //   title: req.body.name,
    //   date: req.body.date,
    //   direccion: req.body.direccion,
    //   provincia: req.body.provincia,
    //   ciudad: req.body.ciudad,
    //   image: req.body.imagen,
    //   descripcion: req.body.descripcion
    // }
    // let ret =  await db.conciertos.create(newConcierto);
    db.Concierto.create({
      user_id:1,
      genre_id:1,
      genero:req.body.genero,
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
    })
    .catch((error) => {
      console.error("Error al crear concierto:", error);
      res.render("errorPage"); // Manejar el error adecuadamente
    });

  },
  //,{include:[{association:"Genero"}]}
  editConcert:  (req, res) => {
    //console.log(req.params.id);
    /*
    const concert = await Concert.findByPk(concertId, {
      include: [{ model: Genre, required: true }], // Perform an inner join with Genre
    });
    */
    
    db.Concierto.findByPk(req.params.id,{include:[{association:"Generos"}]})
      .then(function (concierto) {
         res.render("editconcert", { concertToEdit: concierto.dataValues });
      })
       .catch(function (error) {
        console.error("Error al buscar concierto para editar:", error);
        res.render("errorPage"); // Manejar el error adecuadamente
       });
    
    // let concierto = await db.Concierto.findByPk(req.params.id);
    // //console.log(concierto.dataValues);
    // res.render("editconcert", { concertToEdit: concierto }); 

  },
  saveEditConcert: (req, res) => {
    db.Concierto.update({
      user_id:1,
      genre_id:1,
      artista: req.body.artista,
      title: req.body.name,
      date: req.body.date,
      direccion: req.body.direccion,
      provincia: req.body.provincia,
      ciudad: req.body.ciudad,
      image: req.body.imagen,
      descripcion: req.body.descripcion
    }, {
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        res.redirect('/conciertos/todosLosConciertos/' + req.params.id);
      })
      .catch(function (error) {
        console.error("Error al guardar la edición del concierto:", error);
        res.render("errorPage"); // Manejar el error adecuadamente
      });

    /*
    let idConcert = req.params.id;

    for (let index = 0; index < concerts.length; index++) {
      if(concerts[index].id==idConcert){
        concerts[index].name= req.body.name;
        concerts[index].price= req.body.price;
        concerts[index].date= req.body.date;
        concerts[index].location= req.body.location;
        concerts[index].description= req.body.description;
      }
      */ 
  }
};

module.exports = concertController;
