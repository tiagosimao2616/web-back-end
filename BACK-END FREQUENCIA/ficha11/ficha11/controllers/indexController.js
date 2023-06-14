const {User} = require('../sequelize');
var jwt = require('jsonwebtoken');

function generateAccessToken(email,password){
    var token = jwt.sign({email,password},process.env.TOKEN_SECRET,{expiresIn:'18000s'});
    return token;
}

exports.login = (req,res,next) =>{   
    var {email, password} = req.body
    User.findOne(
        {
            where:{
                email:email,
            }
        }
        ).then(users=>{
            if(users == null){
                req.flash({message:"incorreto (email)"});
                res.redirect('/login');
            }else if(users.password != password){
                req.flash('loginMessage',"incorreto (password)");
                res.redirect('/login');
            }else{
                const token = generateAccessToken(email,password);
                console.log(token);
                req.session.user = users;
                req.session.token = token;
                res.redirect('/profile');
            }
    }       
    )
};

exports.signup = (req,res,next) =>{   
    var {email, password} = req.body
    User.findOne(
        {
            where:{
                email:email,
            }
        }
        ).then(users=>{
            if(users != null){
                req.flash({message:"JÁ EXISTE!!!"});
                res.redirect('/signup');
            }else{ 
                User.create({
                    password:password,
                    email:email
                }).then(user =>{
                    req.session.user = user;
                    res.redirect('/profile');
                })
            }
        }       
    )
}