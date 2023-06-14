const {Loan, Book, User} = require('../sequelize');

exports.getAllLoans = (req,res,next)=>{
    Loan.findAll({include:[User,Book]}).then(loans=>{
        res.status(200).send(loans);
    })
};
// caiu no meu papinnnnn ja era
exports.getLoanById= (req,res,next)=>{
    Loan.findOne(
        {
            include:[User,Book],
            where:{
                id:req.params.id
            }
        }
        ).then(loans=>{

    }).then(
        res.status(200)
    )

};

exports.postLoan = (req,res,next)=>{
    Loan.create(
        req.body
    ).then(
            res.status(200)
    )
}

exports.deleteLoan = (req,res,next)=>{
    Loan.destroy({
        where:{
            id: req.params.id,
        }
    }).then(
        res.status(200)
    )
}

exports.updateLoan = (req,res,next)=>{
    Loan.update(
        req.body,
        {
            where:{
                id: req.params.id,
            }
        }
    ).then(
        res.send(200)
    )    
}