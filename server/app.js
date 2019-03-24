//Contains the functionality of the backend
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

//Connects to mongoDB
mongoose
.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@portfolio-vyxha.mongodb.net/test?retryWrites=true`,{useNewUrlParser: true})
.then(() => console.log("Successfully connecteed to mongoose"))
.catch(() => console.log("Error"));

//Used to make reading JSON data easier
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true|false}));


//Sets the headers to be used to allow access to certain method calls
//Sets headers to allow access across different hosts
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.NODE_ENV !== "development" ? process.env.PROD_DOMAIN : process.env.DEV_DOMAIN ),
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