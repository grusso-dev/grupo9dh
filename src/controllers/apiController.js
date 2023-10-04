const db = require('../database/models');

const apiController = {
  gatUsers: async (req, res) => {
    db.user.findAll()
    .then(users=>{
      res.json({data:users});
    });
    
  }

}

module.exports = apiController