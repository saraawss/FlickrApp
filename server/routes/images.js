const express = require('express');
const router = express.Router();
var imageModule = require('./imageModule');


/* GET ALL images */
router.get('/', function(req, res, next) {
   var tag = '';
   
   imageModule.getImageList(callbackAllImages, tag);
   
   function callbackAllImages(images){
        res.json(images);
   }
  
});


/* GET images BY tag */
router.get('/:tag', function(req, res, next) {
   var tag = req.params.tag;
   
   imageModule.getImageList(callbackAllImages, tag);
   
   function callbackAllImages(images){
        res.json(images);
   }
});



module.exports = router;