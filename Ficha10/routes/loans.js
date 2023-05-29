var express = require('express');
var router = express.Router();
var loansController = require('../controllers/loansController');

/* GET users listing. */
router.get('/', loansController.getAllLoans);
router.get('/:id', loansController.getLoanById);
router.delete('/:id', loansController.deleteLoanById);
router.post('/', loansController.createLoanById);
router.put('/', loansController.updateLoanById);


module.exports = router;
