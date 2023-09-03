const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    
    let alias = "CheckoutItems"; 

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
        access_code:{
             type: DataTypes.STRING(220)
         }

    };

    let config = {
        tableName: 'checkout_items',
        timestamps: false
    };
    
    const CheckoutItem = sequelize.define(alias, cols, config);

    CheckoutItem.associate = function (models) {
        CheckoutItem.belongsTo(models.Concierto, {
          as: 'concierto',
          foreignKey: 'concierto_id',
        });
    
        CheckoutItem.belongsTo(models.Checkout, {
          as: 'checkout',
          foreignKey: 'checkout_id',
        });
      };

    return CheckoutItem;
}
