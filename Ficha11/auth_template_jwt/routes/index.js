var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var indexController = require('../controllers/indexController.js');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/login', function (req,res){
    res.render('login.ejs', {message: req.flash('loginMessage') });
});


router.get('/signup', function (req,res){
    res.render('signup.ejs', {message: req.flash('signupMessage') });
});

router.get('/profile', authenticateTokenFromSession, function (req,res) {
    res.render('profile.ejs', {user: req.session.user});
}); 


router.post('/login', indexController.login);
router.post('/signup', indexController.signup);

function authenticateTokenFromSession(req, res, next) {
    const token = req.session.token;
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err)
        return res.sendStatus(403);
        next()
    })
}

module.exports = router;