const db = require('../database/models');

const apiController = {
  gatUsers: async (req, res) => {
    db.user.findAll()
    .then(users=>{
      res.json({status:200, count:users.length ,data:users});
    });
    
  },
  getGeneros: async(req,res) => {
    db.Genero.findAll({include:[{association:"concierto"}]}).then(generos=>{
      res.json({data : generos});
    });
  },
}

module.exports = apiController