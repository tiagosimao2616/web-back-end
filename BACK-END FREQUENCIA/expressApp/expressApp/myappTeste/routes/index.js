var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: 'Express', 
    primeiro:'zé', 
    ultimo:'Pereira'
  });

});

module.exports = router;
