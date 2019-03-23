//Contains the functionality of the backend
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
require('dotenv').config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true|false}));


app.use((req, res, next) => {

res.setHeader('Access-Control-Allow-Origin', process.env.ALLOW_ORIGIN),
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader(
        'Access-Control-Allow-Methods', 
        'GET, POST, DELETE, PATCH, PUT, OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Credentials', 'true'
    );
    next();
});

const uploadRoutes = require('./routes/phase-three/uploads.js');


app.use('/api/file', uploadRoutes);



module.exports = app;