let express = require('express');
let router = express.Router();
let FileModel = require('../../models/file');
const multer = require('multer');
let path = require('path');

let FileDB = require('../../models/file');

var DIR = './file-uploads';


let store = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './file-uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

let upload = multer({storage: store}).single('file');


//Posts the file to Mongoose
router.post("/upload", (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }
    
    let file = new FileDB();

    file.name = req.file.filename;
    file.type = req.file.mimetype;
    file.url = req.protocol + "://" + req.get("host");
    file.data = req.file;

    file.save().then((savedFile) => {
      res.json({
        message: "Successfully uploaded file",
        fileId: savedFile._id
      })
    }).catch((err) => {
      console.log(err);
    })
    
    res.json({originalname: req.file.originalname, uploadname: req.file.filename});
  });
    
});

///Grabs the file in the file-path directory and sends it to the client
router.post("/download", (req, res, next) => {
  filepath = path.join(__dirname,'../../../file-uploads') + "/" + req.body.filename;
  res.sendFile(filepath);
});



// router.get("file:/fileName", (req,res, next) => {
//   let url = req.protocol + "://" + req.get("host");

//   let fileName = req.params.fileName;

// })

module.exports = router;












module.exports = router;