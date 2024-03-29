//Contains the functionality of the backend
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const mongoose = require('mongoose');
const sql = require('mysql');

//Allows to use the .env file throughout this file
require('dotenv').config();


const app = express();



// Connects to mongoDB by retrieving the environment variables in .env
mongoose
    .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@portfolio-vyxha.mongodb.net/test?retryWrites=true`,{useNewUrlParser: true})
    .then(() => console.log("Successfully connecteed to mongoose"))
    .catch(() => console.log("Error connecting to DB"));

//Used to make reading JSON data easier
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true|false}));


//Sets the headers to be used to allow access to certain method calls
//Sets headers to allow access across different hosts
//The dev_domain allows the calls to be worked with local host
//to work in production, must change the origin to the production site domain

//'https://teixeiramichael.com'
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.DEV_DOMAIN),
        res.setHeader(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader(
            'Access-Control-Allow-Methods', 
            'GET, POST, DELETE, PATCH, PUT, OPTIONS');
        res.setHeader(
            'Access-Control-Allow-Credentials', 'true'
        );
        if(req.method === 'OPTIONS') {
            res.end();
        }
        else {
            next();
        }
});


//Routes defiend for phase 5 of SARA project
const wordRoutes = require('./routes/phase-five/wordRoutes.js');
const crawlerRoutes = require("./routes/phase-five/crawler.js");

//Imports the upload routes to be used with the express server
const fileRoutes = require('./routes/phase-three/uploads.js');
app.use('/api/file', fileRoutes);
app.use('/api/words', wordRoutes);
app.use('/api/crawler', crawlerRoutes);



module.exports = app;