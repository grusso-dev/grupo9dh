const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    
    let alias = "Conciertos"; 

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        sector_id: {
            type: DataTypes.INTEGER
        },
        artista: {
            type: DataTypes.STRING(30)
        }, 
        title: {
            type: DataTypes.STRING(20)
        } ,
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
        } , 
        descripcion: {
            type: DataTypes.STRING(255),
            allowNull: true,
        }

    };

    let config = {
        tableName: 'conciertos',
        timestamps: false
    };
    
    const Concierto = sequelize.define(alias, cols, config);

    Concierto.associate = function (models) {
        Concierto.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id"
        } );

        Concierto.belongsTo(models.Genero, { 
            as: "genero",
            foreignKey: "genre_id"
        } );    

        Concierto.hasMany(models.Sector, {
            as: "sectores",
            foreignKey: "concierto_id"
        })


    };

    
    
     

    return Concierto;
}
