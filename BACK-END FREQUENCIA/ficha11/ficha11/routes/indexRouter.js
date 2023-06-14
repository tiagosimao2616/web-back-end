var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
var jwt = require('jsonwebtoken');
/* GET home page. */


router.get('/',function(req,res,next){
    res.render('index.ejs');
})
router.get('/login',function(req,res,next){
    res.render('login.ejs',{message:"olá"});
})
router.get('/signup',function(req,res,next){
    res.render('signup.ejs',{message:"olá"})
})
router.get('/profile',authenticateTokenFromSession,function(req,res,next){
    res.render('profile.ejs',{user:req.session.user})
})


router.post('/login',indexController.login);
router.post('/signup', indexController.signup);

function authenticateTokenFromSession(req,res,next){
    const token = req.session.token;
    if(token == null) return res.sendStatus(401);
    jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
        if(err){
            return res.sendStatus(403);
        }
        next();
    })
}

module.exports = router;