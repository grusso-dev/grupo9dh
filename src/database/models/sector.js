
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    
    let alias = "Sectores"; 

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        nombreSector: {
            type: DataTypes.STRING(30)
        }, 
        price: {
            type: DataTypes.DECIMAL
        },
        capacity: {
            type: DataTypes.INTEGER
        }

    };

    let config = {
        tableName: 'sectores',
        timestamps: false
    };
    
    const Sector = sequelize.define(alias, cols, config);

    // Sector.associate = function (models) {
    //    Sector.belongsTo(models.Concierto, {
    //     as: "concierto",
    //     foreignKey: "concierto_id"
    //    })
    // }

   

    return Sector;
}
