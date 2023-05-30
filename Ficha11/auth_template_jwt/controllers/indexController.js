const User = require('../sequelize').User;

exports.getAllUsers = (req, res, next) => {
    User.findAll().then(users =>{
        res.send(users);
    });
} 

exports.getUserById = (req, res, next) => {
    User.findByPk(req.params.id).then(results => { 
        res.send(results)
    });
} 

exports.updateUserById = (req, res, next) => {
    User.update(req.body,{
        where: {
            id: req.params.id,
        }
    }).then(users => {
        res.send(users);
    })
}

exports.deleteUserById = (req, res, next) => {
    var id = req.params.id;
    User.destroy({
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

exports.createUserById = (req, res, next) => {
    User.create(req.body)
        .then(body => {
            res.send("Inserted " + body.id);
        });
}

exports.login = function(req, res) {
    var { email, password} = req.body;
    Users.findOne({
        where: {
            email: email
        }
    }).then(user =>{
        if (user == null) {
            req.flash('loginMessage','No user found with this email.');
            res.redirect('/login');
        }
        else if (user.password != password) {
            req.flash('loginMessage','Ops! Wrong Password');
            res.redirect('/login');
        } else {
            const token = generateAccessToken(email,password);
            req.session.user = user;
            req.session.token = token;
        }
    })
}