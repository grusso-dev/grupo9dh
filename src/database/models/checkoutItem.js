const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    let alias = "CheckoutItem";

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        concert_id: {
            type: DataTypes.INTEGER
        },
        unit_price: {
            type: DataTypes.DECIMAL(10,2)
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        checkout_id: {
            type: DataTypes.INTEGER
        },
        access_code: {
            type: DataTypes.STRING(200)
        }
    };

    let config = {
        tableName: 'checkout_item', 
        timestamps: false
    };

    const CheckoutItem = sequelize.define(alias, cols, config);
    
    CheckoutItem.associate = function (modelos) {
        CheckoutItem.belongsTo(modelos.Concierto, { 
            as: 'conciertos',
            foreignKey: 'concert_id',
        });
        
        CheckoutItem.belongsTo(modelos.CheckoutItem, { 
            as: 'checkouts',
            foreignKey: 'checkout_id',
        });

    };


    return CheckoutItem;
};
