
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
        buyDate: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING(1)
        },
       email:{
            type: DataTypes.STRING(60)
        },
        paymentMethod: {
            type: DataTypes.STRING(60)
        },
        countTypeDestination: {
            type: DataTypes.STRING(60)
        },
        cbuAliasDestination: {
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


