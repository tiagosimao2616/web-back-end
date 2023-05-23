var express = require('express');
var router = express.Router();
var loansController = require('../controllers/loansController');

/* GET users listing. */
router.get('/', loansController.getAllLoans);


module.exports = router;
