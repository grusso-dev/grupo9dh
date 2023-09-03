const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    
    let alias = "Checkouts"; 

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING(50)
        }, 
        buy_date: {
            type: DataTypes.DATETIME
        },
        status: {
            type: DataTypes.STRING(1)
        },
       email:{
            type: DataTypes.STRING(60)
        },
        payment_method: {
            type: DataTypes.ENUM
        },
        count_type_destination: {
            type: DataTypes.ENUM
        },
        cbu_alias_destination: {
            type: DataTypes.STRING(30)
        }

    };

    let config = {
        tableName: 'checkouts',
        timestamps: false
    };
    
    const Checkout = sequelize.define(alias, cols, config);

    Checkout.associate = function (models) {
        Checkout.hasMany(models.CheckoutItem, {
          as: 'CheckoutItem',
          foreignKey: 'checkout_id',
        });
    }

    return Checkout;

}
