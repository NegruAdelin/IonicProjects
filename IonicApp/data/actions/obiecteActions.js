var Obiecte = require('../models/Obiecte');

module.exports = {
    getAllObiecte: (res) => {
        Obiecte.findAll().then((obiecte) => {
            res.send(JSON.stringify(obiecte, null, 1));
        });
    },

    getObiectById: (res, id_obiect) => {
        Obiecte.findOne({
            where: {
                id_obiect: id_obiect
            }
        }).then((obiecte) => {
            res.send(JSON.stringify(obiecte, null, 1));
        });
    },

    getObiectByIdGestionar: (res, id_gestionar) => {
        Obiecte.findOne({
            where: {
                id_gestionar: id_gestionar
            }
        }).then((obiecte) => {
            res.send(JSON.stringify(obiecte, null, 1));
        });
    },

    getObiectByIdDepartament: (res, id_departament) => {
        Obiecte.findOne({
            where: {
                id_departament: id_departament
            }
        }).then((obiecte) => {
            res.send(JSON.stringify(obiecte, null, 1));
        });
    },

    getObiectByName: (res, nume_obiect) => {
        Obiecte.findAll({
            where: {
                nume_obiect: nume_obiect
            }
        }).then((obiecte) => {
            res.send(JSON.stringify(obiecte, null, 1));
        });
    },

    getObiectByPrice: (res, pret_obiect) => {
        Obiecte.findAll({
            where: {
                pret_obiect: pret_obiect
            }
        }).then((obiecte) => {
            res.send(JSON.stringify(obiecte, null, 1));
        });
    },

    getObiectByDate: (res, data_achizitiei_obiect) => {
        Obiecte.findAll({
            where: {
                data_achizitiei_obiect: data_achizitiei_obiect
            }
        }).then((obiecte) => {
            res.send(JSON.stringify(obiecte, null, 1));
        });
    },
    
    createObiect: (id_gestionar, id_departament, nume_obiect, descriere_obiect, pret_obiect, data_achizitiei_obiect) => {
        Obiecte.create({
            id_gestionar: id_gestionar,
            id_departament: id_departament,
            nume_obiect: nume_obiect,
            descriere_obiect: descriere_obiect,
            pret_obiect: pret_obiect,
            data_achizitiei_obiect: data_achizitiei_obiect
        })
    },

    deleteObiectById: (id_obiect) => {
        Obiecte.destroy({
            where: {id_obiect: id_obiect}
        })
    },

    deleteObiectByIdGestionar: (id_gestionar) => {
        Obiecte.destroy({
            where: {id_gestionar: id_gestionar}
        })
    },

    deleteObiectByIdDepartament: (id_departament) => {
        Obiecte.destroy({
            where: {id_departament: id_departament}
        })
    },

    deleteObiectByName: (nume_obiect) => {
        Obiecte.destroy({
            where: {nume_obiect: nume_obiect}
        })
    },

    deleteObiectByPrice: (pret_obiect) => {
        Obiecte.destroy({
            where: {pret_obiect: pret_obiect}
        })
    },

    deleteObiectByDate: (data_achizitiei_obiect) => {
        Obiecte.destroy({
            where: {data_achizitiei_obiect: data_achizitiei_obiect}
        })
    },

    updateIdGestionar: (oldId = 0, newId = 0, id = 0) => {
        if(newId != 0){
            if(id != 0){
                Obiecte.update({
                    id_gestionar: newId},
                    {where: {id_obiect: id}
                })
            }
            else{
                if(oldId != 0){
                    Obiecte.update({
                        id_gestionar: newId},
                        {where: {id_gestionar: oldId}
                    })
                }
            }
        }
    },

    updateIdDepartament: (oldId = 0, newId = 0, id = 0) => {
        if(newId != 0){
            if(id != 0){
                Obiecte.update({
                    id_departament: newId},
                    {where: {id_obiect: id}
                })
            }
            else{
                if(oldId != 0){
                    Obiecte.update({
                        id_departament: newId},
                        {where: {id_departament: oldId}
                    })
                }
            }
        }
    },

    updateName: (oldName = 0, newName = 0, id = 0) => {
        if(newName != 0){
            if(id != 0){
                Obiecte.update({
                    nume_obiect: newName},
                    {where: {id_obiect: id}
                })
            }
            else{
                if(oldName != 0){
                    Obiecte.update({
                        nume_obiect: newName},
                        {where: {nume_obiect: oldName}
                    })
                }
            }
        }
    },

    updateDescription: (oldDescription = 0, newDescription = 0, id = 0) => {
        if(newDescription != 0){
            if(id != 0){
                Obiecte.update({
                    descriere_obiect: newDescription},
                    {where: {id_obiect: id}
                })
            }
            else{
                if(oldDescription != 0){
                    Obiecte.update({
                        descriere_obiect: newDescription},
                        {where: {descriere_obiect: oldDescription}
                    })
                }
            }
        }
    },

    updatePrice: (oldPrice = 0, newPrice = 0, id = 0) => {
        if(newPrice != 0){
            if(id != 0){
                Obiecte.update({
                    pret_obiect: newPrice},
                    {where: {id_obiect: id}
                })
            }
            else{
                if(oldPrice != 0){
                    Obiecte.update({
                        pret_obiect: newPrice},
                        {where: {pret_obiect: oldPrice}
                    })
                }
            }
        }
    },

    updateDate: (oldDate = 0, newDate = 0, id = 0) => {
        if(newDate != 0){
            if(id != 0){
                Obiecte.update({
                    data_achizitiei_obiect: newDate},
                    {where: {id_obiect: id}
                })
            }
            else{
                if(oldDate != 0){
                    Obiecte.update({
                        data_achizitiei_obiect: newDate},
                        {where: {data_achizitiei_obiect: oldDate}
                    })
                }
            }
        }
    },

    updateObiect: (id = 0, id_gestionar, id_departament, nume_obiect, descriere_obiect, pret_obiect, data_achizitiei_obiect) => {
        Obiecte.update({
            id_gestionar: id_gestionar,
            id_departament: id_departament,
            nume_obiect: nume_obiect,
            descriere_obiect: descriere_obiect,
            pret_obiect: pret_obiect,
            data_achizitiei_obiect: data_achizitiei_obiect
        },
        {where: {id_obiect: id}
        })
    }
}