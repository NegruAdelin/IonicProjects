const Sequelize = require("sequelize");

module.exports = sequelize.define("User", {
   firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});