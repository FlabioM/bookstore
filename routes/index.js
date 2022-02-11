var express = require('express');
var router = express.Router();
const booksController = require('../controllers/booksController.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/books', booksController.viewAll);
router.get('/books/edit/:id', booksController.renderEditForm);
router.get('/books/add', booksController.renderAddForm);
router.post('/books/edit/:id', booksController.updateBook);
router.post('/books/add', booksController.addBook);
router.get('/book/profile/:id', booksController.viewProfile);




module.exports = router;
