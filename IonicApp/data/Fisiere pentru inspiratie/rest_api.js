const express = require('express');
const app = express();
var rebuildDatabase = require('./rebuild_database.js');
var db = require ('./connect_database.js');

rebuildDatabase();

app.get('/', (req, res) => {
    console.log('Hello from the root');
    res.send('Hello from the root web page :)');
});

app.listen(8080, () => {
    console.log('Hello World');
});
