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
            type: DataTypes.ENUM(
                'Elegi un genero',
                '1',
                '2',
                '3',
                '4'
            )
        },
    };

    let config = {
        tableName: 'genre',
        timestamps: false
    };

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate=function(modelos){
        Genero.hasMany(modelos.Concierto, {
            as:"concierto",
            foreignKey: 'genre_id'
        });
    };

    return Genero; 
}
