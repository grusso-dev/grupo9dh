const db = require('../database/models');

const apiController = {
  getUsers: async (req, res) => {
    db.user.findAll()
    .then(users=>{
      res.json({status:200, count:users.length ,data:users});
    });
    
  },
  getGeneros: async(req,res) => {
    db.Genero.findAll({include:[{association:"concierto"}]}).then(generos=>{
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
}

module.exports = apiController