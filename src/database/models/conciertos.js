const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    let alias = "conciertos";

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        // sector_id: {
        //     type: DataTypes.INTEGER
        // },
        artista: {
            type: DataTypes.STRING(30)
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
        description: {
            type: DataTypes.STRING(255),
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
    };
    return Concierto;
}
