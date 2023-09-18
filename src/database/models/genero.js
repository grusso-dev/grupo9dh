const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    
    let alias = "Genero"; 

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING(200)
        },
    };

    let config = {
        tableName: 'genre',
        timestamps: false
    };
    
     const Genero = sequelize.define(alias, cols, config);

    Genero.associate=function(modelos){
        Genero.hasMany(modelos.conciertos, {
            as:"concierto",
            foreignKey: 'genre_id'
        });
    };

    return Genero;
}
