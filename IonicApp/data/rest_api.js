const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const cors = require('cors');
var Gestionari = require ('./actions/gestionariActions');
var Departamente = require ('./actions/departamentActions');
var Obiecte = require ('./actions/obiecteActions');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(morgan('short'));

//API for gestionari
app.post('/gestionar_create', (req, res) => {
    const name = req.body.nameInput;
    const last_name = req.body.lastNameInput;
    const password = req.body.passwordInput;
    const email = req.body.emailInput;
    const id_department = req.body.departmentInput;
    Gestionari.createGestionar(id_department, email, password, name, last_name);
    res.end();
});

app.post('/update_gestionar', (req, res) => {
    const gestionar = req.body;
    Gestionari.updateGestionar(gestionar.id_gestionar, gestionar.name_gestionar, gestionar.last_name_gestionar, gestionar.email_gestionar, gestionar.id_departament);
    res.end();
});

app.get('/gestionari', (req, res) => {
    Gestionari.getAllGestionari(res);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/gestionari/:id', (req, res) => {
    Gestionari.getGestionarById(res, req.params.id);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/gestionari/departament/:id_departament', (req, res) => {
    Gestionari.getGestionarByIdDepartament(res, req.params.id_departament);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/gestionari/name/:name', (req, res) => {
    Gestionari.getGestionarByName(res, req.params.name);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/gestionari/last_name/:last_name', (req, res) => {
    Gestionari.getGestionarByLastName(res, req.params.last_name);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/gestionari/email/:email', (req, res) => {
    Gestionari.getGestionarByEmail(res, req.params.email);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/comparePassword/:inputPass&:id', (req, res) => {
    Gestionari.comparePassword(res, req.params.inputPass, req.params.id);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

});

app.get('/gestionari/delete/:id', (req, res) => {
    Gestionari.deleteGestionarById(req.params.id);
})
//end API for gestionari


//API for departamente
app.get('/departamente', (req, res) => {
    Departamente.getAllDepartament(res);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/departamente/:id', (req, res) => {
    Departamente.getDepartamentById(res, req.params.id);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/departamente/id_departament', (req, res) => {
    Departamente.getDepartamentById(res, req.params.id_departament);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/departamente/:name', (req, res) => {
    Departamente.getDepartamentByName(res, req.params.name);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/departamente/:address', (req, res) => {
    Departamente.getDepartamentByAddress(res, req.params.address);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});
//end API for departamente


//API for obiecte
app.post('/obiecte/update_obiect', (req, res) => {
    const obiect = req.body;
    Obiecte.updateObiect(obiect.id_obiect, obiect.id_gestionar, obiect.id_departament, obiect.nume_obiect,
        obiect.descriere_obiect, obiect.pret_obiect, obiect.data_achizitie_obiect);
    res.end();
});

app.get('/obiecte', (req, res) => {
    Obiecte.getAllObiecte(res);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/obiecte/:id', (req, res) => {
    Obiecte.getObiectById(res, req.params.id);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/obiecte/departament/:id_departament', (req, res) => {
    Obiecte.getObiectByIdDepartament(res, req.params.id_departament);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/obiecte/gestionar/:id_gestionar', (req, res) => {
    Obiecte.getObiectByIdGestionar(res, req.params.id_gestionar);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/obiecte/:name', (req, res) => {
    Obiecte.getObiectByName(res, req.params.name);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/obiecte/:price', (req, res) => {
    Obiecte.getObiectByPrice(res, req.params.price);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/obiecte/:date', (req, res) => {
    Obiecte.getObiectByDate(res, req.params.date);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
});

app.get('/obiecte/delete/:id', (req, res) => {
    Obiecte.deleteObiectById(req.params.id);
})
//end API for obiecte


app.listen(8080, () => {
    console.log('Hello World');
});
