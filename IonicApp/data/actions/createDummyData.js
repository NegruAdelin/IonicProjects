var Obiecte = require('../actions/obiecteActions');
var Departamente = require('../actions/departamentActions');
var Gestionari = require('../actions/gestionariActions');

function gestionari(){
    Gestionari.createGestionar(2, "negru.adelin@gmail.com", "Informatica2021!", "Negru", "Petrisor - Adein");
    Gestionari.createGestionar(1, "miky.dar@yahoo.com", "Pamant Plat!", "Mihai", "Marius");
    Gestionari.createGestionar(1, "daniel.iancu@gmail.com", "carne vs 4 mere!", "Daniel", "Motroc");
    Gestionari.createGestionar(3, "tero22@gmail.com", "afara ploua3!", "Dragomir", "Mircea");
    Gestionari.createGestionar(4, "orezBrun4@gmail.com", "afara ploua4!", "Ion", "Glanetas");
}

function departament(){
    Departamente.createDepartament("Chimie", "A. I. Cuza");
    Departamente.createDepartament("Matematica", "A. I. Cuza");
    Departamente.createDepartament("Matematica - Informatica", "A. I. Cuza");
    Departamente.createDepartament("Fizica", "A. I. Cuza");
    Departamente.createDepartament("Geografie", "A. I. Cuza");
    Departamente.createDepartament("Istorie", "A. I. Cuza");
    Departamente.createDepartament("Litere", "A. I. Cuza");
}

function obiecte(){
    Obiecte.createObiect(1, 2, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(1, 2, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(1, 2, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(1, 2, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(1, 3, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(1, 3, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(2, 3, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(2, 3, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(2, 4, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(2, 4, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(2, 4, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(2, 4, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(3, 5, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(3, 5, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(3, 5, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(3, 5, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(3, 6, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(3, 6, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(4, 6, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(4, 6, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(4, 7, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(4, 7, "Scaun", "Scaun din otel si panza", 40, "2015-01-08");
    Obiecte.createObiect(4, 7, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
    Obiecte.createObiect(4, 7, "Birou", "Birou din lemn de nuc", 60, "2015-02-08");
}

function createData(){
    departament();
    
    setTimeout(() => {
        gestionari()
    }, 500);

    setTimeout(() => {
        obiecte()
    }, 1000);
}

createData();