const {User} = require('../sequelize');

exports.getAllusers = (req,res,next)=>{
    User.findAll().then(users=>{
        res.send(users);
    })
};
// caiu no meu papinnnnn ja era
exports.getUserById= (req,res,next)=>{
    User.findOne(
        {
            where:{
                id:req.params.id
            }
        }
        ).then(users=>{

    }).then(
        res.status(200)
    )

};

exports.postUser = (req,res,next)=>{
    User.create(
        req.body
    ).then(
            res.status(200)
    )
}

exports.deleteUser = (req,res,next)=>{
    User.destroy({
        where:{
            id: req.params.id,
        }
    }).then(
        res.status(200)
    )
}

exports.updateUser = (req,res,next)=>{
    User.update(
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