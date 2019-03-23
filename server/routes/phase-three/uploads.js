let express = require('express');
let router = express.Router();
let FileModel = require('../../models/file');
const multer = require('multer');

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

router.post("/file", (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }

    res.json({originalname: req.file.originalname, uploadname: req.file.filename});
  });
    
});

module.exports = router;












module.exports = router;