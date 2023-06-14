var express = require('express');
var router = express.Router()

var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'ficha7db'
});

connection.connect()

/* GET *  person*/
router.get('/', function(req, res, next) {
   

    connection.query('SELECT * FROM person',function(err,rows,fields){
        if(err) throw err
        res.send(rows)
    });

});
//create (post) 
router.get('/create/:fname/:lname/:work/:age', function(req, res, next) {
    var age = req.params.age;
    var fname = req.params.fname;
    var lname = req.params.lname;
    var work = req.params.work;
    
    connection.query('INSERT INTO person (firstname,lastname,profession,age) VALUES (?,?,?,?);',[fname,lname,work,parseInt(age)],function(err,rows,fields){
        if(err) throw err
        res.send("foi adicionado");
    });

});
//delete by id
router.get('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    
    connection.query('DELETE FROM person WHERE person.person_id = ?',[id],function(err,rows,fields){
        if(err) throw err
        res.send("foi removido");
    });

});
//get by id
router.get('/:id', function(req, res, next) {
   

    connection.query('SELECT * FROM person Where person.person_id = ?',[req.params.id],function(err,rows,fields){
        if(err) throw err
        res.send(rows)
    });

});
//get by age and profession
router.get('/:age/:profession', function(req, res, next) {
    
    connection.query('SELECT * FROM person Where person.age = ? and person.profession = ?',[req.params.age,req.params.profession],function(err,rows,fields){
        if(err) throw err
        res.send(rows)
    });

});
//update by id

router.get('/update/:fname/:lname/:work/:age/:id', function(req, res, next) {
    var age = req.params.age;
    var fname = req.params.fname;
    var lname = req.params.lname;
    var work = req.params.work;
    var id = req.params.id;
    
    connection.query('',[fname,lname,work,parseInt(age)],function(err,rows,fields){
        if(err) throw err
        res.send("foi adicionado");
    });

});

module.exports = router;


