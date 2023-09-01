/*
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
          type: Sequelize.DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          allowNull:false,
          autoIncrement:true
      },
      mail: {
          type: Sequelize.DataTypes.STRING(50),
          allowNull:false
      }, 
      password: {
          type: Sequelize.DataTypes.STRING(20),
          allowNull:false
      }, 
      fullname: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull:false
      },
      fiscal_type: {
        type: Sequelize.DataTypes.ENUM({
                                        values: ['value', 'another value']
                                      }),
        allowNull:false
      },
      create_date: {type: Sequelize.DataTypes.DATE},
      delete_date: {type: Sequelize.DataTypes.DATE},
      cbu_alias: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull:false
      },
      count_type: {
        type: Sequelize.DataTypes.ENUM({
                                        values: ['value', 'another value']
                                      }),
        allowNull:false
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user')
  }
};
*/