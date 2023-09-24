const { isUtf8 } = require('buffer');
const fs = require('fs');

const User = {
    fileName:'./data/usersDataBase.json',

    getData: function(){
        return  JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },


    findByPk: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    findByField: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },

   // Crear Usuarios

    create : function(userData){
        let allUsers = this.findAll();
        allUsers.push(userData);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null, ' '));
        return true;

    },
    // Borrar Usuarios

    delete: function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers,null, ' '));
        return true;

    }
}

module.exports = User;