'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        id: null,
        mail: "luke_skywalker@hotmail.com",
        password: "soyjedi156",
        fullname: "Luke Skywalker",
        fiscal_type:"Value",
        create_date: "2023-08-08 08:00:00",
        delete_date: "2023-08-08 08:00:00",
        cbu_alias:'xwing.mp',
        count_type:'Value 2'

      },
      {
        id: null,
        mail: "han_solo@hotmail.com",
        password: "fjefiojeo",
        fullname: "Han Solo",
        fiscal_type:"Value",
        create_date: "2023-08-08 08:00:00",
        delete_date: "2023-08-08 08:00:00",
        cbu_alias:'millennium.falcon',
        count_type:'Value 2'
      },
      {
        id: null,
        mail: "darth_vader@hotmail.com",
        password: "ladooscuro",
        fullname: "darth vader",
        fiscal_type:"Value",
        create_date: "2023-08-08 08:00:00",
        delete_date: "2023-08-08 08:00:00",
        cbu_alias:'estrella.muerte',
        count_type:'Value 2'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('users', null, {});
  }
};