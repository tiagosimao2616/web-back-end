var express = require('express');
var router = express.Router();
var loansController = require('../controllers/loansController');

/* GET users listing. */
router.get('/',loansController.getAllLoans);
router.post('/',loansController.postLoan);
router.get('/:id',loansController.getLoanById);
router.delete('/:id',loansController.deleteLoan);
router.put('/:id',loansController.updateLoan);
module.exports = router;
