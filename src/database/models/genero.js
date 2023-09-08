

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    
    let alias = "Generos"; 

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
        tableName: 'generos',
        timestamps: false
    };
    
     const Genero = sequelize.define(alias, cols, config);

    // Genero.associate = function (models) {
    //     Genero.belongsTo(models.Concierto, {
    //         as: "genero",
    //         foreignKey: "genre_id"
    //     } )
    // };

    return Genero;
}
