var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

require('./config/connect');




const routerUS = require('./routes/crud.route');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api',routerUS);




/*

app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
        res.status(400).send('Invalid JSON format');
    } else {
        next(err);
    }
});

// Gestion des autres erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send('Something went wrong!');
});

*/




module.exports = app;
