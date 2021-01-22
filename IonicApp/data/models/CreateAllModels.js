var Departamente = require ("./Departamente");
var Gestionari = require ("./Gestionari");
var Obiecte = require ("./Obiecte");

Departamente.sync().then(() => {
    Gestionari.sync().then(() => {
        Obiecte.sync()
    })
});


