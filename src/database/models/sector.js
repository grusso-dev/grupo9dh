const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    let alias = "Sector"; 

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        nombre_sector: {
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
        tableName: 'sector', 
        timestamps: false
    };

    const Sector = sequelize.define(alias, cols, config);

    Sector.associate = function (modelos) {
        Sector.belongsTo(modelos.Concierto, {
            as: "conciertos",
            foreignKey: "concert_id"
        });
    }

    return Sector;
}
