//Contains the functionality of the backend
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true|false}));


app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', "http://localhost:4200"),
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


app.use('/api/uploads', uploadRoutes);



module.exports = app;