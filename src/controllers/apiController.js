const db = require('../database/models'); 

const apiController = {
  getUsers: async (req, res) => {
    db.user.findAll()
    .then(users=>{
      res.json({status:200, count:users.length ,data:users});
    });
    
  },
  getGeneros: async(req,res) => {
    db.Genero.findAll({include:[{association:"concierto"}]})
    .then(generos=>{
      res.json({generos});
    });
  },
  totalusers: async(req,res) => {
    db.user.findAll().then(users=>{
      res.json({catidad:users.length});
    });
  },
  totalgeneros: async(req,res) => {
    db.Genero.findAll().then(generos=>{
      res.json({catidad:generos.length});
    });
  },
  totalconcert: async(req,res) => {
    db.Concierto.findAll().then(concerts=>{
      res.json({catidad:concerts.length});
    });
  },
  ultimoconcert: async(req,res) => {
    db.Concierto.findAll().then(concerts=>{
      const ultimo=concerts.length - 1;
      res.json({ultimo:concerts[ultimo]});
    });
  },
  concerts: async (req, res) => {
    db.Concierto.findAll({include:[{association:"Generos"},{association:"User"},{association:"Sector"}]})
    .then(conciertos=>{
      res.json({conciertos});
    });
  },
  concert:async(req,res)=>{
    db.Concierto.findByPk(req.params.id,{include:[{association:"Generos"},{association:"User"},{association:"Sector"}]})
      .then(function (concierto) {
        // db.Sector.findByPk(2)
        // .then((sector)=>{
        //   concierto.sector=sector;
        // })
        // .catch(function (error) {
        //   concierto.sector={};
          
        // });
        res.json({concierto});
      })
      .catch(function (error) {
        console.error("Error al buscar concierto:", error);
        res.render("errorPage"); // Manejar el error adecuadamente
      });

  },
}

module.exports = apiController