'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Name: Sequelize.STRING(20),
    Password:{
        type: Sequelize.STRING(20),
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
