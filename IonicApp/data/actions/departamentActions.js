var Departament = require('../models/Departamente');

module.exports = {
    getAllDepartament: (res) => {
        Departament.findAll().then((departamente) => {
            res.send(JSON.stringify(departamente, null, 1));
        });
    },

    getDepartamentById: (res, id_departament) => {
        Departament.findOne({
            where: {
                id_departament: id_departament
            }
        }).then((departamente) => {
            res.send(JSON.stringify(departamente, null, 1));
        });
    },

    getDepartamentByName: (res, nume_departament) => {
        Departament.findAll({
            where: {
                nume_departament: nume_departament
            }
        }).then((departamente) => {
            res.send(JSON.stringify(departamente, null, 1));
        });
    },

    getDepartamentByAddress: (res, adresa_departament) => {
        Departament.findAll({
            where: {
                adresa_departament: adresa_departament
            }
        }).then((departamente) => {
            res.send(JSON.stringify(departamente, null, 1));
        });
    },

    createDepartament: (nume_departament, adresa_departament) => {
        Departament.create({
            nume_departament: nume_departament,
            adresa_departament: adresa_departament
        });
    },

    deleteDepartamentByName: (nume_departament) => {
        Departament.destroy({
            where: {nume_departament: nume_departament}
        })
    },

    deleteDepartamentById: (id_departament) =>{
        Departament.destroy({
            where: {id_departament: id_departament}
        })
    },

    deleteDepartamentByAddress: (adresa_departament) => {
        Departament.destroy({
            where: {adresa_departament: adresa_departament}
        })
    },

    updateName: (oldName = 0, newName = 0, id = 0) => {
        if(newName != 0){
            if(id != 0){
                Departament.update({
                    nume_departament: newName},
                    {where :{id_departament: id}
                })
            }
            else{
                if(oldName != 0){
                    Departament.update({
                        nume_departament: newName},
                        {where :{nume_departament: oldName}
                    })
                }
            }
        }
    },

    updateAdresa: (oldAdresa = 0, newAdresa = 0, id = 0) => {
        if(newAdresa != 0){
            if(id != 0){
                Departament.update({
                    nume_departament: newAdresa},
                    {where :{id_departament: id}
                })
            }
            else{
                if(oldAdresa != 0){
                    Departament.update({
                        nume_departament: newAdresa},
                        {where :{nume_departament: oldAdresa}
                    })
                }
            }
        }
    }
}