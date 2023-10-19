const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    let alias = "Concierto"; 

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        },
        sector_id: {
            type: DataTypes.INTEGER
        },
        artista: {
            type: DataTypes.STRING(30)
        },
        name: { 
            type: DataTypes.STRING(20)
        },
        date: {
            type: DataTypes.DATE
        },
        direccion: {
            type: DataTypes.STRING(100)
        },
        provincia: {
            type: DataTypes.STRING(30)
        },
        ciudad: {
            type: DataTypes.STRING(30)
        },
        image: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        status: { 
            type: DataTypes.ENUM('method1', 'method2')
        },
        description: {
            type: DataTypes.TEXT, 
            allowNull: true,
        }
    };

    let config = {
        tableName: 'conciertos',
        timestamps: false
    };

    const Concierto = sequelize.define(alias, cols, config);
    Concierto.associate=function(modelos){
      Concierto.belongsTo(modelos.user, {
        as:"User",
        foreignKey: 'user_id'
      });
      Concierto.belongsTo(modelos.Genero, {
        as:"Generos",
        foreignKey: 'genre_id'
      });
    };
    
    return Concierto;
};
