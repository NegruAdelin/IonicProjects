var Sequelize = require ('sequelize');

const sequelize = new Sequelize ('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {timestamps: false}
});

module.exports = sequelize;

