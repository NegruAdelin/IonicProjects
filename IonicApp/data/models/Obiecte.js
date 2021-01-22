var Sequelize = require ('sequelize');
var sequelize = require ('../connection/connect');
var Gestionari = require ('./Gestionari');
var Departamente = require ('./Departamente');

const Obiecte = sequelize.define('Obiecte', {
    id_obiect: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    id_gestionar: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    id_departament: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
    nume_obiect: {
        type: Sequelize.STRING,
        allowNull: false
    },

    descriere_obiect: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    pret_obiect: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    data_achizitiei_obiect: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}, {freezeTableName: true});

Gestionari.hasMany(Obiecte, {foreignKey: 'id_gestionar', foreingKeyConstraint: true});
Departamente.hasMany(Obiecte, {foreignKey: 'id_departament', foreignKeyConstraint: true});

Obiecte.belongsTo(Gestionari, {foreignKey: 'id_gestionar', foreingKeyConstraint: true});
Obiecte.belongsTo(Departamente, {foreignKey: 'id_departament', foreignKeyConstraint: true});


module.exports = Obiecte;