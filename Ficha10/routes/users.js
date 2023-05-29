var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.delete('/:id', usersController.deleteUserById);
router.post('/', usersController.createUserById);
router.put('/', usersController.updateUserById);

module.exports = router;
