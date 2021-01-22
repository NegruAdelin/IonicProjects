var Sequelize = require ("sequelize");
var sequelize = require ("../connection/connect");
var Departamente = require ('./Departamente');

 const Gestionari = sequelize.define("Gestionari", {
    id_gestionar: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    id_departament: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    email_gestionar: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    password_gestionar: {
        type: Sequelize.STRING,
        allowNull: false
    },

    name_gestionar: {
        type: Sequelize.STRING,
        allowNull: false
    },

    last_name_gestionar: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{freezeTableName: true});

Departamente.hasMany(Gestionari, {foreignKey: 'id_departament', foreignKeyConstraint: true});
Gestionari.belongsTo(Departamente, {foreignKey: 'id_departament', foreingKeyConstraint: true});

module.exports = Gestionari;