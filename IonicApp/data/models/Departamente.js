var Sequelize = require ('sequelize');
var sequelize = require ('../connection/connect');

const Departamente = sequelize.define('Departamente',{
    id_departament: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    nume_departament: {
        type: Sequelize.STRING,
        allowNull: false
    },

    adresa_departament: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},{freezeTableName: true});

module.exports = Departamente;