const Loan = require('../sequelize').Loan;

exports.getAllLoans = (req, res, next) => {
    Loan.findAll().then(loans =>{
        res.send(loans);
    });
} 

