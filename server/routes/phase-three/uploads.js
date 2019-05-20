let express = require('express');
let router = express.Router();
let FileModel = require('../../models/file');
const multer = require('multer');
let path = require('path');

//Fast csv to read csv data
let csv = require('fast-csv');

//Top converts xml to json
//Second converts json to xml
// let xmlParser = require('xml2json');
var js2xmlparser = require("js2xmlparser");

//Faster to read csv data to json
let fastCsvReader = require("csvtojson");

//Nodes FS to work with files
let fs = require('fs');

let FileDB = require('../../models/file');




var DIR2 = './uploaded-files';
var DIR = './src/assets/file-uploads';


//Assigns to the multer the location and filename
//Of where the file will be saved on the local directory
let store = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, DIR2);
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

let upload = multer({storage: store}).single('file');













//Saves the incoming file to mongoose
//returns the id of the newly created slot of the db
router.post("/upload", (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }

    //Create a new File and save it to the DB
    // let file = new FileDB();

    file.name = req.file.filename;
    file.type = req.file.mimetype;
    file.url = req.protocol + "://" + req.get("host");
    file.data = req.file;

    file.save().then((savedFile) => {
      res.send({
        message: "Successfully uploaded file",
        fileId: savedFile._id
      })
    }).catch((err) => {
      res.send({
        message: "Error saving file",
        error: err,
      });
      console.log(err);
    })
     
  });
    
});














//Grabs the file in the uploaded-file path directory on the root of the project
//for the user to download
router.post("/download", (req, res, next) => {
  path.join(__dirname,'../../../src/assets/file-uploads')
  let path2 =  './uploaded-files';
  filepath = path2 + "/" + req.body.filename;
  res.sendFile(filepath);
});















//Retrieves a file that's located in the uploaded-files directory
router.get("/retrieve/:fileName", (req,res,next) => {

  //Location of where the files are stored
  let filePath = path.join(__dirname,'../../../uploaded-files') + "/" + req.params.fileName;

  let fileName = req.params.fileName;

  if(fileName.endsWith(".csv")){
    //Stores the converted json data to be sent to the front-end
    let dataToSend = {
        results: []};



    //uses the fast-csv module to read csv data and send to the front end
    //Grabs the file from the location and right before the line finishes,
    //it pauses, adds the data to the dataToSend object and then continues
    //in a synchronous fashion
    let csvStream = fastCsvReader().fromFile(filePath)
    .on("data", (obj) => {
      csvStream.pause();

      dataToSend.results.push(JSON.parse(obj.toLocaleString().toLocaleLowerCase()));

      csvStream.resume();

    })
    .on("end", (fin) => {

      //After converting the csv data to json, we send the results back
      res.send(dataToSend);

    }).on("error",(err) => console.log(err));
  }




  //Send back the json file
  if(fileName.endsWith(".json")){
    res.sendFile(filePath);
  }



  //Reads an XML file and converts the data into JSON
  if(fileName.endsWith(".xml")){

    fs.readFile(filePath, (err, data) => {

      let options = {
        object: true,
      }


      let json =  xmlParser.toJson(data.toString()  , options);



      res.send({"results": json.root.results});
    })
  }

  
})
















//Creates the saved results the user picks to be stored
//in my local directory on my desktop
router.post("/create", (req, res, next) => {

  let fileLocation = "/Users/michaelteixeira/Desktop/files-created/";

    //If the type is of json, we stringify the results to be json
    if(req.body.fileType === "application/json"){
      let data = JSON.stringify(req.body.results);
      fileName = "saved-results.json";

      //The path to where the file will be stored
      //This creates a file if it is not present and stores the information
      fs.writeFile(`${fileLocation + fileName}`, data, (err) => {
        if (err){
          console.log(err);
          return;
        }
        //Grabs the location of the file
        filepath =  fileLocation + fileName;
        res.sendFile(filepath); 
        console.log("File has been created and downloaded");
      });
    } else if(req.body.fileType === "text/csv"){
      console.log("need to convert data to csv file");
      let fileName = "saved-results.csv";

      let results =  req.body.results || [];

      let csvString = "";

      results.map((result) => {
        csvString += result.title +"," + result.url + "," + result.description + "\n";
      });

      createFileAndDownload(res, fileLocation, fileName, csvString.toLowerCase());
    }

    if(req.body.fileType === "text/xml"){
      let incomingJson = req.body.results;
      let fileName = "saved-results.xml";

      let jsonConvertedToXml = js2xmlparser.parse("result", incomingJson);

      createFileAndDownload(res, fileLocation, fileName, jsonConvertedToXml);
    }

});














createFileAndDownload =  (res,fileLocation, fileName, data) => {
  fs.writeFile(`${fileLocation + fileName}`, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    //Grabs the location of the file
    filepath = fileLocation + fileName;
    res.sendFile(filepath);
    console.log("File has been created and downloaded");
  });
}

module.exports = router;
