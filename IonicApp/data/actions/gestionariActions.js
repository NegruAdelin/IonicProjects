var Gestionari = require ('../models/Gestionari');
const bcrypt = require ('bcrypt');

module.exports = {
    getAllGestionari: (res) => {
        Gestionari.findAll().then((gestionari) => {
            res.send(JSON.stringify(gestionari, null, 1));
        });
    },

    getGestionarById: (res, id_gestionar) => {
        Gestionari.findOne({
            where: {
                id_gestionar: id_gestionar
            }
        }).then((gestionari) => {
            res.send(JSON.stringify(gestionari, null, 1));
        });
    },

    getGestionarByIdDepartament: (res, id_departament) => {
        Gestionari.findOne({
            where: {
                id_departament: id_departament
            }
        }).then((gestionari) => {
            res.send(JSON.stringify(gestionari, null, 1));
        });
    },

    getGestionarByName: (res, name_gestionar) => {
        Gestionari.findAll({
            where: {
                name_gestionar: name_gestionar
            }
        }).then((gestionari) => {
            res.send(JSON.stringify(gestionari, null, 1));
        });
    },
    
    getGestionarByLastName: (res, last_name_gestionar) => {
        Gestionari.findAll({
            where: {
                last_name_gestionar: last_name_gestionar
            }
        }).then((gestionari) => {
            res.send(JSON.stringify(gestionari, null, 1));
        });
    },

    getGestionarByEmail: (res, email_gestionar) => {
        Gestionari.findAll({
            where: {
                email_gestionar: email_gestionar
            }
        }).then((gestionari) => {
            res.send(JSON.stringify(gestionari, null, 1));
        });
    },

    comparePassword: (res, passwordInput, id) => {
        Gestionari.findOne({
            where: {
                id_gestionar: id
            }
        }).then((gestionari) => {
            bcrypt.compare(passwordInput, gestionari.password_gestionar).then(value => {
                res.send(JSON.stringify(value, null, 1));
            })
        })
    },

    createGestionar: (id_departament, email_gestionar, password_gestionar, name_gestionar,  last_name_gestionar) => {
        bcrypt.hash(password_gestionar, 5).then((hash) => {
            Gestionari.create({
                id_departament: id_departament,
                email_gestionar: email_gestionar,
                password_gestionar: hash,
                name_gestionar: name_gestionar,
                last_name_gestionar: last_name_gestionar,
            })
        });
    },

    deleteGestionarById: (id_gestionar) => {
        Gestionari.destroy({
            where: {id_gestionar: id_gestionar}
        })
    }, 

    deleteGestionarByIdDepartament: (id_departament) => {
        Gestionari.destroy({
            where: {id_departament: id_departament}
        })
    },

    deleteGestionarByName: (name_gestionar) => {
        Gestionari.destroy({
            where: {name_gestionar: name_gestionar}
        })
    },

    deleteGestionarBylastName: (last_name_gestionar) => {
        Gestionari.destroy({
            where: {last_name_gestionar: last_name_gestionar}
        })
    },

    deleteGestionarByEmail: (email_gestionar) => {
        Gestionari.destroy({
            where: {email_gestionar: email_gestionar}
        })
    },

    updateIdDepartament: (oldIdDepartament = 0, newIdDepratament = 0, id = 0) => {
        if(newIdDepratament != 0){
            if(id != 0){
                Gestionari.update({
                    id_departament: newIdDepratament
                },
                    {where: {id_gestionar: id }
                })
            }
            else{
                if(oldIdDepartament != 0){
                    Gestionari.update({
                        id_departament: newIdDepratament
                    },
                        {where: {id_departament: oldEmail}
                    })
                }
            }
        }
    },

    updateEmail: (oldEmail = 0, newEmail = 0, id = 0) => {
        if(newEmail != 0){
            if(id != 0){
                Gestionari.update({
                    email_gestionar: newEmail
                },
                    {where: {id_gestionar: id }
                })
            }
            else{
                if(oldEmail != 0){
                    Gestionari.update({
                        email_gestionar: newEmail
                    },
                        {where: {email_gestionar: oldEmail}
                    })
                }
            }
        }
    },

    updatePassword: (oldPassword = 0, newPassword = 0, id = 0) => {
        if(newPassword != 0){
            if(id != 0){
                Gestionari.update({
                    password_gestionar: newPassword
                },
                    {where: {id_gestionar: id }
                })
            }
            else{
                if(oldPassword != 0){
                    Gestionari.update({
                        password_gestionar: newPassword
                    },
                        {where: {password_gestionar: oldPassword}
                    })
                }
            }
        }
    },

    updateName: (oldName = 0, newName = 0, id = 0) => {
        if(newName != 0){
            if(id != 0){
                Gestionari.update({
                    name_gestionar: newName
                },
                    {where: {id_gestionar: id }
                })
            }
            else{
                if(oldName != 0){
                    Gestionari.update({
                        name_gestionar: newName
                    },
                        {where: {name_gestionar: oldName}
                    })
                }
            }
        }
    },

    updateLastName: (oldLastName = 0, newLastName = 0, id = 0) => {
        if(newLastName != 0){
            if(id != 0){
                Gestionari.update({
                    last_name_gestionar: newLastName
                },
                    {where: {id_gestionar: id }
                })
            }
            else{
                if(oldLastName != 0){
                    Gestionari.update({
                        last_name_gestionar: newLastName
                    },
                        {where: {last_name_gestionar: oldLastName}
                    })
                }
            }
        }
    },

    updateGestionar: (id = 0, name_gestionar, last_name_gestionar, email_gestionar, id_departament) => {
        Gestionari.update({
            name_gestionar: name_gestionar,
            last_name_gestionar: last_name_gestionar,
            email_gestionar: email_gestionar,
            id_departament: id_departament
        },
        {
            where: {id_gestionar: id}
        })
    }
}