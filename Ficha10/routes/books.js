var express = require('express');
var router = express.Router();
var booksController = require('../controllers/booksController');

/* GET users listing. */
router.get('/', booksController.getAllBooks);
router.get('/:id', booksController.getBookById);
router.delete('/:id', booksController.deleteBookById);
router.post('/', booksController.createBookById);
router.put('/', booksController.updateBookById);


module.exports = router;
