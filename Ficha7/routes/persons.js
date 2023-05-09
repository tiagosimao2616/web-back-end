var express = require('express');
var mysql = require('mysql')
var router = express.Router();

//Create Connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ficha7'
});

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', (req, res, next) => {
  connection.query('select * from persons', (err, results, fields) => {
    res.send(results);
  })
});

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  connection.query("select * from persons where persons_id = ?", id, (err, results, fields) => {
    res.send(results);
  })
});

/**
 * @openapi
 * /:
 *   post:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.post('/', (req, res, next) => {
  var person = req.body;
  connection.query("insert into persons set ?", [person], (err, results, fields) => {
    res.send(results);
  })
});

/**
 * @openapi
 * /:
 *   delete:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.delete('/:id', (req, res, next) => {
  var id = req.params.id;
  connection.query("delete from persons where persons_id = ?", id, (err, results, fields) => {
    if (results.affectedRows == 0) {
      res.status(404).end("Id " + id + " not found")
    }
    else {
      res.send("Person deleted with id: " + id)
    }
  })
});

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/:age/:profession', (req, res, next) => {
  var age = req.params.age;
  var profession = req.params.profession;
  connection.query("select * from persons where age = ? and profession = ?", [age, profession], (err, results, fields) => {
    res.send(results);
  })
});

module.exports = router;