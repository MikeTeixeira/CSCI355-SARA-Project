let express = require('express');
let router = express.Router();
let FileModel = require('../../models/file');
const multer = require('multer');
let path = require('path');

var DIR = './file-uploads';


let store = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './file-uploads');
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+"."+file.originalname);
    }
})

let upload = multer({storage: store}).single('file');

router.post("/upload", (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }

    //Store to database
    res.json({originalname: req.file.originalname, uploadname: req.file.filename});
  });
    
});

///Grabs the file in the file-path directory and sends it to the client
router.post("/download", (req, res, next) => {
  filepath = path.join(__dirname,'../../../file-uploads') + "/" + req.body.filename;
  res.sendFile(filepath);
})

module.exports = router;












module.exports = router;