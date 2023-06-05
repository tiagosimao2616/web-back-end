var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

router.use(authenticateTokenFromSession);

/* GET users listing. */
router.get('/users', usersController.getAllUsers);

router.get('/:id', usersController.getUserById);

router.delete('/:id', usersController.deleteUserById);

router.post('/', usersController.createUserById);

router.put('/', usersController.updateUserById);

module.exports = router;


function authenticateTokenFromSession(req,res,next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}