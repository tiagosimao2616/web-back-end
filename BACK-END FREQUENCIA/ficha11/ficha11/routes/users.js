var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
var jwt = require('jsonwebtoken');
/* GET users listing. */
function authenticateTokenFromHeader(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const token = req.session.token;
    if(token == null) return res.sendStatus(401);
    jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
        if(err){
            return res.sendStatus(403);
        }
        req.user = user
        next();
    })
}

router.get('/',authenticateTokenFromHeader,usersController.getAllusers);
router.post('/',usersController.postUser);
router.get('/:id',usersController.getUserById);
router.delete('/:id',usersController.deleteUser);
router.put('/:id',usersController.updateUser);



module.exports = router;

