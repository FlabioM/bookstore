const {Books} = require('../models')


module.exports.viewAll = async function(req, res){
    const books = await Books.findAll();
    res.render('books/view_all', {books});
}

module.exports.viewProfile= async function(req, res){
    const books = await Books.findByPk(req.params.id);
    res.render('books/profile', {books});

}

module.exports.renderEditForm = async function(req, res){
    const books = await Books.findByPk(req.params.id);
    res.render('books/edit', {books});
}

module.exports.renderAddForm = function(req, res){
    const books = {
        title: '',
        author: '',
        publisher: '',
        genre: '',
        numOfPages: '',
        imageOfCover: '',
        description: ''
    }
    res.render('books/add', {books});
}

module.exports.updateBook = async function(req, res){
    const books = await Books.update({
        title: req.body.name,
        author: req.body.author,
        publisher: req.body.publisher,
        genre: req.body.genre,
        numOfPages: req.body.numOfPages,
        imageOfCover: req.body.imageOfCover,
        description: req.body.description
        }, {
        where: {
            id: req.params.id
        }
        });
    res.redirect(`/books/profile/${req.params.id}`);
}

module.exports.addBook = async function(req, res){
    const books = await Books.create({
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        genre: req.body.genre,
        numOfPages: req.body.numOfPages,
        imageOfCover: req.body.imageOfCover,
        description: req.body.description
    });
    res.redirect(`/books/profile/${books/id}`);
}