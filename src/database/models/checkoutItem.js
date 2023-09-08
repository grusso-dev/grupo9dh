
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    
    let alias = "CheckoutItems"; 

    let cols = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        unitPrice: {
            type: DataTypes.DECIMAL
        }, 
        quantity: {
            type: DataTypes.INTEGER
        },
        checkoutId: {
            type: DataTypes.INTEGER
        },
        accessCode:{
             type: DataTypes.STRING(220)
         }

    };

    let config = {
        tableName: 'CheckoutItems',
        timestamps: false
    };
    
    const CheckoutItem = sequelize.define(alias, cols, config);

    // CheckoutItem.associate = function (models) {
    //     CheckoutItem.belongsTo(models.Concierto, {
    //       as: 'concierto',
    //       foreignKey: 'concierto_id',
    //     });
    
    //     CheckoutItem.belongsTo(models.Checkout, {
    //       as: 'checkout',
    //       foreignKey: 'checkout_id',
    //     });
    //   };

    return CheckoutItem;
}
