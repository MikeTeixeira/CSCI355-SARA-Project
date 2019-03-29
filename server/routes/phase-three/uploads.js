let express = require('express');
let router = express.Router();
let FileModel = require('../../models/file');
const multer = require('multer');
let path = require('path');

let fs = require('fs');

let FileDB = require('../../models/file');

var DIR = './src/assets/file-uploads';


//Assigns to the multer the location and filename
//Of where the file will be saved on the local directory
let store = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, DIR);
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
    let file = new FileDB();

    console.log(req.file);

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



///Grabs the file in the file-path directory and sends it to the client
router.post("/download", (req, res, next) => {
  filepath = path.join(__dirname,'../../../src/assets/file-uploads') + "/" + req.body.filename;
  res.sendFile(filepath);
});




router.post("/create", (req, res, next) => {

  let fileLocation = "/Users/michaelteixeira/Desktop/files-created/";

    //If the type is of json, we stringify the results to be json
    if(req.body.fileType === "application/json"){
      let data = JSON.stringify(req.body.results);
      fileName = "saved-results.json"



      

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
    }
})




//Retrieves a file by it's name and returns in
// router.get("/file:/fileName", (req,res, next) => {

//   let fileName = req.params.fileName;

//   FileDB.findOne({name: fileName}, (err, fileFound) => {
//       if(err){
//         console.log(err);
//         return;
//       }

//       console.log(fileFound);
//   })
// });

module.exports = router;
