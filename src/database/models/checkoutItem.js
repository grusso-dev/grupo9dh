const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    let alias = "CheckoutItem";

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        unit_price: {
            type: DataTypes.DECIMAL
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        checkout_id: {
            type: DataTypes.INTEGER
        },
        access_code: {
            type: DataTypes.STRING(220)
        }
    };

    let config = {
        tableName: 'checkoutItem', 
        timestamps: false
    };

    const CheckoutItem = sequelize.define(alias, cols, config);
    /*

    CheckoutItem.associate = function (modelos) {
        CheckoutItem.belongsTo(modelos.Conciertos, { 
            as: 'conciertos',
            foreignKey: 'concert_id',
        });
        
        CheckoutItem.belongsTo(modelos.Checkout, { 
            as: 'checkouts',
            foreignKey: 'checkout_id',
        });
    };

    */

    return CheckoutItem;
};
