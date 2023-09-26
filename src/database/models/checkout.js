const { DataTypes } = require("sequelize"); 

module.exports = (sequelize) => {
    
    let alias = "Checkout"; 

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
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING(1)
        },
        email:{
             type: DataTypes.STRING(50)
         },
        payment_method: {
            type: DataTypes.ENUM('method1', 'method2')
        },
        count_type_destination: {
            type: DataTypes.ENUM('type1', 'type2')
        }, 
        cbu_alias_destination: {
            type: DataTypes.STRING(30)
        }
    };

    let config = {
        tableName: 'checkout',
        timestamps: false
    };
    
    const Checkout = sequelize.define(alias, cols, config);

    /*
    Checkout.associate = function (modelos) {
        
        Checkout.hasMany(modelos.CheckoutItem, {
            as: "checkout_items",
            foreignKey: "checkout_id"
        });
    }

    */

    return Checkout;
};
