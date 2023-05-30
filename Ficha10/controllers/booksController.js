const Book = require('../sequelize').Book;

exports.getAllBooks = (req, res, next) => {
    Book.findAll().then(books =>{
        res.send(books);
    });
} 

exports.getBookById = (req, res, next) => {
    Book.findByPk(req.params.id).then(results => { 
        res.send(results)
    });
}

exports.updateBookById = (req, res, next) => {
    Book.update(req.body,{
        where: {
            id: req.params.id,
        }
    }).then(books => {
        res.send(books);
    })
}

exports.deleteBookById = (req, res, next) => {
    var id = req.params.id;
    Book.destroy({
        where: {
            id: id
        }
    }).then((affectedRows) => {
        if (affectedRows == 0) {
            res.status(404).send("Id nao existe");
        } else {
            res.send("affectedRows " + affectedRows);
        }
    });

}

exports.createBookById = (req, res, next) => {
    Book.create(req.body)
        .then(body => {
            res.send("Inserted " + body.id);
        });
}