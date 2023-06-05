const User = require('../sequelize').User;
var jwt = require('jsonwebtoken');

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

exports.login = function(req, res, next) {
    var { email, password} = req.body;
    User.findOne({
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
            console.log(token);
            res.redirect('/profile');
        }
    })/*.catch(function (err) {
        /req.flash('loginMessage', err);
        res.redirect('login');
    })*/
}

function generateAccessToken(email, password) {
    var token = jwt.sign({ email, password}, process.env.TOKEN_SECRET,
    { expiresIn: '18000s' });
    return token;
}


exports.signup = function(req, res, next) {
    var {email, password} = req.body;
    User.findOne({
        where: {
            email: email
        }
    }).then(result =>{
        if (result == null) {
            User.create({ 'email': email, 'password':password})
            .then(user =>{
                req.session.user = user;
                res.redirect('/profile');
            });
        }
        else {
            req.flash('signupMessage', 'That e-mail is already taken.');
            res.redirect('/signup');
        }
    })
}
