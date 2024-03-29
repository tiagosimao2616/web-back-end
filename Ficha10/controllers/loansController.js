const Loan = require('../sequelize').Loan;
const Book = require('../sequelize').Book;
const User = require('../sequelize').User;

exports.getAllLoans = (req, res, next) => {
    Loan.findAll({include:[User, Book]}).then(loans =>{
        res.send(loans);
    });
} 

exports.getLoanById = (req, res, next) => {
    Loan.findByPk(req.params.id).then(results => { 
        res.send(results)
    });
}

exports.updateLoanById = (req, res, next) => {
    Loan.update(req.body,{
        where: {
            id: req.params.id,
        }
    }).then(loans => {
        res.send(loans);
    })
}

exports.deleteLoanById = (req, res, next) => {
    var id = req.params.id;
    Loan.destroy({
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

exports.createLoanById = (req, res, next) => {
    Loan.create(req.body)
        .then(body => {
            res.send("Inserted " + body.id);
        });
}